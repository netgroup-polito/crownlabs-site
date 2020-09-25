+++
fragment = "content"
#disabled = true
date = "2020-09-21"
weight = 100
# title = "Simple guide: git & CrownLabs"
+++


## Introduction

CrownLabs is a project with its own repository on Github and if you want to participate in its development, you should be able to use (quite well) git and Github.

Having said that, here is a set of useful documentation and finally a simple example done right on CrownLabs.


## Useful links

### Github Guides

[Here](https://guides.github.com) there is a list of guides that explain various topics, such as Git, Github, how to create documentation for a Github project, and more. 

In particular, to start working, we recommend these three articles:
1. [Understading the Github flow](https://guides.github.com/introduction/flow/)
2. [Hello World](https://guides.github.com/activities/hello-world/). The easiest way to get started with GitHub. In this guide you'll complete a time honored "Hello World" exercise, and learn GitHub essentials. 
3. [Git Handbook](https://guides.github.com/introduction/git-handbook/). Here you can learn about version control and in particular, Git, and how it works with GitHub.


### Learn Git Branching

As always, there is no better way to understand a topic than to start doing some practice right away, so we would like to point out this very simple and well done tour. Try Git commands right from your web browser. Featuring some of your soon-to-be favorites: branch, add, commit, merge, revert, cherry-pick, rebase! 

[Click here](https://learngitbranching.js.org/) to start enjoying git branching.




## Work with us

This is a easy way to collaborate. You can work quietly locally on some feature and then push everything on a branch. For example, Mario Rossi working on fixing a login bug: mrs/fix-bug-login

1. Cloning CrownLabs:

```
~ [master]  git clone https://github.com/netgroup-polito/CrownLabs.git
Cloning into 'CrownLabs'...
remote: Enumerating objects: 92, done.
remote: Counting objects: 100% (92/92), done.
remote: Compressing objects: 100% (56/56), done.
remote: Total 3684 (delta 38), reused 69 (delta 30), pack-reused 3592
Ricezione degli oggetti: 100% (3684/3684), 2.09 MiB | 289.00 KiB/s, done.
Risoluzione dei delta: 100% (2255/2255), done.
~ [master]  cd CrownLabs
```

2. Create a branch and make some changes:

```
CrownLabs [master] git checkout -b mrs/fix-bug-login           
Switched to a new branch 'mrs/fix-bug-login'
CrownLabs [mrs/fix-bug-login]  touch newfile.yml 
```

3. Check the changes made and push them into the new branch with an appropriate comment:

```
CrownLabs [mrs/fix-bug-login]  git status
Sul branch mrs/fix-bug-login
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	newfile.yml

nothing added to commit but untracked files present (use "git add" to track)
CrownLabs [mrs/fix-bug-login]  git add newfile.yml 
CrownLabs [mrs/fix-bug-login]  git status         
Sul branch mrs/fix-bug-login
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   newfile.yml

CrownLabs [mrs/fix-bug-login]  git commit -m "put here your commit"

...
                                                                                    
CrownLabs [mrs/fix-bug-login] git push origin mrs/fix-bug-login                 
...

```

