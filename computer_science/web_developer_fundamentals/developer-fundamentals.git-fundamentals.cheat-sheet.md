---
id: UM3oVtRFUXueHmMwQMSSe
title: Cheat Sheet
desc: ''
updated: 1644635405291
created: 1644619277317
---

[Setting up Git](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git)

# Table of Contents

- [Git Config](#git-config)
- [Remote Repository](#commands-related-to-remote-repository)
- [Starting a Git Repo](#commands-related-to-starting-a-git-repo)
- [Workflow](#commands-related-to-workflow)
- [Check Status](#commands-related-to-checking-status-or-history)

## Git config

- `git config --global user.name "Your Name"`
- `git config --global user.email "yourname@example.com"`
- `git config --global color.ui auto`
- `git config --global core.editor "code --wait"`
  - `git commit` - this will open a new tab to write a message and optional details

## Commands Related to Remote Repository

- `git clone <url>`
- `git push` or `git push origin main`

## Commands Related to Starting a Git Repo

- `git clone <url>` - if starting from remote
- `git init` - if starting local

## Commands Related to Workflow

- `git add [file-name]` or `git add .`
- `git commit -m "some text"`

## Commands Related to Checking Status or History

- `git status`
- `git log`
