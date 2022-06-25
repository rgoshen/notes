---
id: Lh3x99e8ZqZyQuAoS4uUm
title: Manjaro Misc Instructions
desc: 'Misc Instructions'
updated: 1643687923357
created: 1643686376661
---

# Table of Contents

- [Build from Aur Package](#build-of-aur-package)
- [Upgrade packages installed from Aur](#upgrade-packages-installed-from-aur)

## Build of Aur Package

1. Ensure you have necessary files for building applications from source
   1. `pamac install base-devel git`
1. Clone the pkg build
   1. `git clone [url]`
1. Change directory to cloned folder
   1. `cd [folder]`
1. To make/compile the package run
   1. `makepkg -S`
1. List folder content
   1. `ls`
1. Upgrade package - file file ending .pkg.tar.zst and run
   1. `sudo pacman -U [file_name.pkg.tar.zst]`
   1. or `makepkg -i` (instead of `-U` flag)
   1. or `makepkg -is` (combines steps 4 & 6 together)

## Upgrade packages installed from Aur

`pacman upgrade -a`
