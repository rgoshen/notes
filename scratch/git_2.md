# Useful git commands

- remove remote

```bash
git remote rm upstream
```

- add remote

```bash
git remote add upstream <url to repo>
```

- fetching remote

```bash
git fetch upstream/staging
```

- checkout remote

```bash
git checkout upstream/staging
```

- create a new branch from remote branch

```bash
git checkout -b <new_branch_name> <remote>
```

delete a branch

```bash
git branch -D <branch-name>
```

delete from remote

```bash
git push origin :<branch-name>
```

or

```bash
git push origin --delete <branch-name>
```
