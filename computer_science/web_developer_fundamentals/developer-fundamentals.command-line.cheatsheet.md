---
id: l797ATxMCsSjrCn6AvgGw
title: Cheat Sheet
desc: 'CLI Cheatsheet'
updated: 1644619157428
created: 1644617130355
---

[Conquering the Command Line](https://www.softcover.io/read/fc6c09de/unix_commands/frontmatter) |
[Unix/Linux Command reference](https://files.fosswire.com/2007/08/fwunixref.pdf)

# Table of Contents

## Moving Around

- `Command/Control + a` (move to beginning of line)
- `Command/Control + e` (move to end of line)
- `Command/Control + w` (delete the word where your cursor is)
- `Command/Control + u` (delete an entire line)
- `Option/Alt + left/right` (jump between words)

## Commands

- `cat [file-name]` - display contents of a file
- `cd [directory-name]` - change directory
  - `cd ..` - back up one level
  - `cd ~` - change directory to home
- `cp <origin-path> <destination-path>` - copies file
- `cp -r [directory] [new-directory]` - copies directory
  - flag `-r` - recursively
- `echo` - write text to the terminal
  - `echo "some text" > [file-name]` writes given text into the specified file
- `ls` - list files in current directory
  - flag `-a` - list all (includes hidden files)
  - flag `-l` - long form listing - descriptions of files
  - flag `-h` - human readable sizes
  - flag `-s` - sort by size
  - flag `-t` - sort by last modified time
  - flag `-r` - reverse sort
- `ls <path>` - list a different direcotyr
- `mkdir [directory-name]` - create a new directory
- `mv [file-name] <desitination-path>` or `mv [directory] <destination-path>` - moves file or directory to the specified location
- `mv [file-name] [new-file-name]` - renames file
- `open [file-name]` - opens the file
- `pwd` - present working directory - tells you where you currently are
- `rm <file-name>` - removes (deletes) file
- `rm -rf [directory]` - removes a directory
  - flag `-r` - recursively
  - flag `-f` - forcefully (if directory is not completely empty)
- `touch [file-name]` - creates a new file
