+++
fragment = "content"
date = "2021-12-20"
weight = 100
+++

## Introduction

Besides allowing users to spawn pre-build environments through their personal dashboard, CrownLabs offers the possibility to directly access a private **slice** (i.e., [namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)) of the underlying **Kubernetes cluster**.
Hence, allowing to practice with this widely adopted orchestrator without the need for complex setups, freely experimenting with the **deployment of microservice-based applications** and their exposition to external clients.

**Warning**: before continuing with this tutorial, make sure a) you have a **CrownLabs account**, b) a **sandbox namespace** has been created for you and c) you know the name of your sandbox namespace (by default, *sandbox-sxxxxxx*, where *xxxxxx* is your PoliTO ID).
In case of problems, or if you want to request the creation of a sandbox namespace for your account, please [contact the CrownLabs team](/contact).

## Installing kubectl

In order to access your **sandbox namespace** on CrownLabs, it is necessary to first install **kubectl**, the Kubernetes command-line tool that allows to run commands against Kubernetes clusters.
You can refer to the [official documentation](https://kubernetes.io/docs/tasks/tools/) to discover how to download and install **kubectl** on your preferred operating system.

**Note:** you should make sure the selected kubectl version is compatible with the CrownLabs cluster, according to the [version skew policy](https://kubernetes.io/releases/version-skew-policy/#kubectl). The CrownLabs cluster is currently based on Kubernetes v1.21, hence versions 1.20.x, 1.21.x and 1.22.x of kubectl are officially supported.

**Note:** you may also install kubectl and perform the following configurations on a CrownLabs instance, if you are not using your own PC (e.g., you are in a PoliTO laboratory).

## Installing kubelogin

Given the CrownLabs cluster leverages OIDC for authentication, it is necessary to install an additional kubectl plugin, named [**kubelogin**](https://github.com/int128/kubelogin) (also known as **kubectl oidc-login**), which takes care of the SSO authentication process and token retrieval.

The installation of **kubelogin** can be performed by means of [**krew**](https://github.com/kubernetes-sigs/krew), the kubectl plugin manager.
If not yet present, **krew** can be installed following the [official documentation](https://krew.sigs.k8s.io/docs/user-guide/setup/install/).
Once **krew** is available, the **kubelogin** installation is as simple as:

```bash
kubectl krew install oidc-login
```

## Creating the kubeconfig

The last step required to connect to the sandbox namespace involves the configuration of the so-called **kubeconfig** file.
This file contains all the parameters required to connect to a Kubernetes cluster (e.g., IP address of the API server, ...), along with the authentication credentials.

**Note:** by default, kubectl looks for a file named **config** in the **$HOME/.kube** directory.
You can specify other kubeconfig files by setting the **KUBECONFIG** environment variable or by setting the **--kubeconfig** flag.
For more details about how to manage the access to multiple clusters, you can refer to the [official documentation](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).

The **kubeconfig** to access you sandbox namespace is the following (replace `__YOUR_SANDBOX_NAMESPACE__` with the name of your sandbox namespace):

```yaml
apiVersion: v1
kind: Config
clusters:
- cluster:
    server: https://apiserver.crownlabs.polito.it
  name: crownlabs
contexts:
- context:
    cluster: crownlabs
    namespace: __YOUR_SANDBOX_NAMESPACE__
    user: crownlabs-oidc
  name: crownlabs
current-context: crownlabs
users:
- name: crownlabs-oidc
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      args:
      - oidc-login
      - get-token
      - --oidc-issuer-url=https://auth.crownlabs.polito.it/auth/realms/crownlabs
      - --oidc-client-id=k8s
      command: kubectl
```

## Accessing the sandbox namespace

Once the **kubeconfig** is correctly in place, it is possible to verify that everything works fine typing `kubectl get pods`.
A browser tab should open to login on CrownLabs and, once the credentials are inserted, you should see the list of pods running on your namespace (most likely none).

**Warning:** given you are using a shared infrastructure, your account is associated with **limited permissions**.
In particular, you cannot access resources outside of your namespace, or cluster-wide resources (e.g., nodes).

To avoid the need for inserting the CrownLabs credentials when starting a new session, it is possible to embed them directly inside the kubeconfig file.
Do not embed your credentials if you are using a shared PC (or a CrownLabs instance), as everyone with access to that PC (instance) will be able to see them in plain text.
Credentials can be embedded adding the following arguments (replace the placeholders with your credentials) to the `users.user.exec.args` section of your kubeconfig file (i.e., below the `- --oidc-client-id=k8s` line):

```yaml
      - --skip-open-browser
      - --username=__YOUR_CROWNLABS_USERNAME__
      - --password=__YOUR_CROWNLABS_PASSWORD__
```
