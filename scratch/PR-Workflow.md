# USTC Workflow

- upstream = ustc repo

1. create new branch from ustc/staging

```bash
git checkout -b <new-branch-name> upstream/staging
```

2. push branch to flexion repo

```bash
git push -u origin <branch-name>
```

> NOTE:
>
> `<branch-name>` should be the same as step 1

3. deploy to experimental env

   - locate available exp env (use circle)
   - announce to team via #usttech & also exp tracker
   - deploy to exp env
     - delete: `git push origin --delete <environmental X>`
     - create: `git checkout -b <environmental X>`
     - push: `git push -u origin <experimantal X>`

4. once done working on task make PR to ustc/test
