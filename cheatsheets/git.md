# Git

## TOC

- [Configuring Git](#configuring-git)
- [Remote Repos](#remote-repos)
- [Initializing a New Repo](#initializing-a-new-repo)
- [Saving Changes to the Repo](#saving-changes-to-the-repo)
- [Committing Changes to the Repo](#committing-changes-to-the-repo)
- [Compare Changes](#compare-changes)

### Configuring Git

- Define author name: `git config --global user.name 'user name'`
- Define author email: `git config --global user.email 'user email'`
- Create alias for git command: `git config --global alias.<alias_name><git-command>`
- Define text editor used by git commands: `git config --system core.editor <editor>`
- Open the global configuration file in a text editor for manual editing: `git config --global --edit`

> NOTE:
>
> `--global`: sets to all repos on the machine
>
> `--local` or not passing a config level option: sets it local repo only
>
> `--system` set config for entire system, all users, all repos on the machine

[Back](#toc)

### Remote Repos

- Add remote repo: `git remote add <remote_name> <remote-repo-url>`
    - map to a remote repo to a reference in your local repo
- Push local branches to remote: `git push -u <remote_name><local_branch_name>`
    - push the local repo branch under `<local_branch_name>` to teh remote repo @ `<remote_name>`

[Back](#toc)

### Initializing a New Repo

- Cloning a repo: `git clone <repo_URL>` or `git clone <repo_URL><directory>`
- New repo:

Option 1:

```bash
cd <project-folder>
git init
```

Option 2:

```bash
git init <project_directory>
```

Option 3: (initialize empty repo)

```bash
git init --bare <project_directory>
```

[Back](#toc)

### Saving Changes to the Repo

Option #1 (add single file): `git add <project_file>`

Option #2 (add all files): `git add .`

Option #3 (interactive staging session): `git add -p`

[Back](#toc)

### Committing Changes to the Repo

Option #1 (open interactive editor): `git commit`

Option #2 (commit with a short message): `git commit -m "some short message"`

Option #3 (change a commit message): `git commit --amend`

[Back](#toc)

### Compare Changes

Option #1: `git diff --color-words`

Option #2: `git diff-highlight`

Option #3: `git diff branch1 ... branch2`

Option #4: `git diff <branch1><branch2> ./file.txt`

[Back](#toc)
