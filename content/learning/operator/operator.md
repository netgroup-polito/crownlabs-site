+++
fragment = "content"
#disabled = true
date = "2020-12-07"
weight = 100
# title = "Creating and modifying an operator in Kubernetes"
+++



## Introduction

CrownLabs uses the Kubernetes [operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/ "operator pattern") to automate complex tasks such as the configuration and provisioning of virtual environments.
With this paradigm we can create both new _custom resources_, a set of objects that model a specific part of system (e.g., the _student_ with its own set of _attributes_), and the associated _software logic_ (e.g., the code required to _create_ a new student, _update_ or _delete_ this object, and more).
As a consequence, the implementation of additional features in CrownLabs implies dealing with operators, either modifying an existing one or creating a new one.

In CrownLabs, most operators use the [kubebuilder](https://github.com/kubernetes-sigs/kubebuilder) framework to simplify the task of generating [CRDs](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/ "CRDs"), Controllers (where the operator\'s logic resides) and the various Kubernetes manifests needed.

This page aims at providing a set of useful tips and references to start learning and practicing with operators.

This page is split in two sections, depending whether you want to create a _new_ operator from scratch or you want to modify an _existing_ one; for instance, it is very common that a new feature in CrownLabs may require modifications to existing operators instead of asking for a brand new operator.


## Prerequisites
Regardless you want to create a _new_ operator or modify an _existing_ one,  here there are the software prerequisites.

1. go version v1.13+
2. docker version 17.03+
3. kubectl version v1.11.3+
4. Access to a Kubernetes v1.11.3+ cluster ([kind](https://kind.sigs.k8s.io/ "kind") or [minikube](https://minikube.sigs.k8s.io/docs/ "minikube") are good enough)
5. kubebuilder ([installation](https://book.kubebuilder.io/quick-start.html#installation "installation"))


## Creating an operator

Useful links:
1. The [official documentation](https://book.kubebuilder.io/quick-start.html) is rather good but the example might appear far from what you want to realize.
2. This [step-by-step tutorial](https://www.youtube.com/watch?v=KBTXBUVNF2I) on how to build an operator from scratch, after a first watch to get an overview, it might be useful to come back to it while you build the operator to look for specific parts.

Useful information to get the kubebuilder project started:
- Use `polito.it` as domain when doing `kubebuilder init` (or `example.com`  if you are just testing stuff)
- The api group should be set to `crownlabs`
- At the moment of writing CrownLabs is focused on developing the API version `v1alpha1` and `v1alpha2`. Check out the repository to make sure you create your project with the right parameters.
- the `kind` option is going to be the CRD name, the generated controller will be named `<kind_name>_controller`

Example:

```
kubebuilder init --domain polito.it
```

```
$ kubebuilder create api \
  --group crownlabs \
  --kind YourCustomKind \
  --version v1alpha2
```

Sometimes you might want to create an operator that manages different kind of resources that have already been defined or simply you do not need to create a new CRD.
Kubebuilder will generate the controller code only after generating CRDs, so even if you do not really need to define a CRD just do it and you can easily get rid of it later while you have the rest of the code correctly generated.


## Writing the controller or modifying an existing operator

The kubebuilder framework uses the controller-runtime library to communicate with the Kubernetes API. The documentation of the library is sparse across different packages, here are some useful ones:
1. [controller-runtime](https://godoc.org/sigs.k8s.io/controller-runtime "controller-runtime") general godoc page
2. controller-runtime\'s [client](https://godoc.org/sigs.k8s.io/controller-runtime/pkg/client "client") used to interact with the k8s API
3. the [builder](https://godoc.org/sigs.k8s.io/controller-runtime/pkg/builder "builder") used in the `SetupWithManager` function to select which resources to watch
4. the [request](https://godoc.org/sigs.k8s.io/controller-runtime/pkg/reconcile#Request "request") received in the reconciler function
5. k8s [corev1](https://godoc.org/k8s.io/api/core/v1 "corev1") in case you need to interact with core k8s kind (pods, deployments, configmaps etc)

## Useful tips

Here are some useful suggestions if you are new to programming an operator:

1. You may need to watch more than one resource, e.g., when you have to react to different conditions.
This leads the operator to wake up when either one of the watched resources is modified. A possible example is the following: in the reconcile function the operator creates a resource that can take a while to be ready. If you have to wait for its readiness to go on in the reconcile, instead of polling the resource you can simply return from the reconcile function and watch for it. Taking as example the `CrownLabs` Instance-Operator, the default watched resource is the Instance. If you have to create a persistent Instance, a Datavolume is created; since a DataVolume takes 5 to 10 minutes to be ready, this kind of resource has been added to the watched ones, so that every time the Datavolume is modified (e.g. because it became ready) the reconcile is triggered.
In this case what you need to do is to add Owns() in the [setup](https://book.kubebuilder.io/cronjob-tutorial/controller-implementation.html#setup) function, with the desired resource inside:
    ```
    func (r *_ObjectToReconcile_) SetupWithManager(mgr ctrl.Manager) error {

        return ctrl.NewControllerManagedBy(mgr).
            For(&principal_resource).
            Owns(&second_resource_to_watch).
            Owns(&third_resource_to_watch).
            Complete(r)
    }
    ```

2. When a watched resource is modified and the controller starts a reconciliation, you may need to add some filters in order to select specific changes that need operator action (and therefore that have to wake up the controller).
An example is a resource that needs reconciling only if a specific label is present.
This operation can be performed thanks to the [Predicates](https://sdk.operatorframework.io/docs/building-operators/golang/references/event-filtering/).
In order to use them you should modify the setup function explained above in the following way:
    ```
    func (r *ObjectToReconcile) SetupWithManager(mgr ctrl.Manager) error {
        klog.Info("setup manager")
        return ctrl.NewControllerManagedBy(mgr).
        For(&principal_resource, builder.WithPredicates(predicate.GenerationChangedPredicate{})).
            Owns(&second_resource_to_watch, builder.WithPredicates(someExamplePredicate())).
            Complete(r)
    }
    ```
    The SetupWithManager function is different from the above one since now, together with the watched resource, there is an optional parameter (the _predicate_) that specifies when the reconcile is triggered.

    ```
    func someExamplePredicate() predicate.Predicate {
        return predicate.Funcs{
            CreateFunc: func(e event.UpdateEvent) bool {
                // Here you can compare old version and new version of the watched object
                return condition_to_evaluate
            },
            UpdateFunc: func(e event.UpdateEvent) bool {
                // Here you can compare old version and new version of the watched object
                return condition_to_evaluate
            },
            DeleteFunc: func(e event.DeleteEvent) bool {
                // Here you can compare old version and new version of the watched object
                return condition_to_evaluate
            },
        }
    }
    ```

    A Predicate takes an event of a particular type (Create / Update / Delete) and returns true if the event should be processed by reconcile. As you can see in this [link](https://pkg.go.dev/sigs.k8s.io/controller-runtime/pkg/predicate "link"), the `predicates`  package already provides some predicates for common scenarios, such as to select only the modifications involving changes to the spec or filtering by label.

3. Another problem that you can face relates to the creation and the update of resources in the cluster.
Given that a controller must be _idempotent_ (i.e., a superfluous reconcile should have no effect and additional resources should be created or updated depending on whether already present in the cluster), it is better to use [CreateOrUpdate](https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.8.0/pkg/controller/controllerutil#CreateOrUpdate), a function that is intrinsically idempotent and it is part of the `controller-utils` package.
To use the `CreateOrUpdate` function you have to first create an initial instance of the resource itself, specifying only its name and the namespace, if appropriate.
Then, the function takes care of initializing the content of the resource with the current version retrieved from the cluster (if any), before executing the  _mutate function_ specified as a parameter.
This has to configure the resource itself, e.g., adding labels, modifying annotations and describing specifications, to make it converge to the desired status.
Finally, `CreateOrUpdate` takes care of saving the modified resource in the cluster.
In other words, this function implements a very similar behavior to `kubectl apply`.

    Here there is a CreateOrUpdate example for a deployment:
    ```
    deployment := corev1.Deployment{
        ObjectMeta: metav1.ObjectMeta{
            Name: "name", Namespace: "namespace"}
            }
    _, err = ctrl.CreateOrUpdate(ctx, r.Client, &deployment, func() error {
            UpdateDeploymentSpec(&deployment)
            return ctrl.SetControllerReference( &Owner, &deployment, r.Scheme)
        })
    ```


4. While updating a resource, sometimes the `Update()` function could trigger errors like: "_operation cannot be fulfilled on resource, the object has been modified_".
This means that the controller is using a different version of the resource from the one present in the cluster; this of course leads to a failure when updating the resource.
To overcome this problem you can use the function Patch() instead of Update().
In fact, Patch() does not make any check on the resource version; a possible problem consists in the possibility to lose some updates (since the changes in a resource are compared thanks to the version of the resource itself).
If the resource is watched only by one controller, you only may risk to overwrite your own changes and this may not matter thanks to idempotence. If the resource is owned by more than one controller, you should be very careful to use this function since you can lose some updates made by others controllers.
Here you can find an example of how a Patch is made: first you copy the old object, then you modify the fields you want, finally you apply the patch:  
    ```
    PatchedDeployment := *deployment.DeepCopy()
    PatchedDeployment.Spec.Template.Labels := newLabels

    if err := r.Patch(ctx, &PatchedDeployment, client.MergeFrom(deployment)); err != nil {
        klog.Error("Unable to patch")
        klog.Error(err)
    }
    ```


## Notes

You might notice that the structure in the CrownLabs repository is different from the one generated by kubebuilder. However, this is not a big deal:
- `main.go` goes inside its own folder inside `operators/cmd/<operator-name>`
- `<kind>_controller.go` goes inside its own directory `operators/pkg/<kind>-controller/`
- CRD manifests go inside `operators/deploy/crds/`
- operator\'s deployment goes inside its own folder inside `operators/deploy/<operator-name>`
