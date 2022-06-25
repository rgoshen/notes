---
id: 6rf1vll75XszhCLjmXO94
title: Manjaro PostgreSQL Instructions
desc: 'PostgreSQL Instructions'
updated: 1643688786112
created: 1643687790360
---

References

- [How to setup PostgreSQL and PGAdmin on Manjaro Linux / Arch](https://dev.to/tusharsadhwani/how-to-setup-postgresql-on-manjaro-linux-arch-412l)
- [Arch Linux PostgreSQL Wiki](https://wiki.archlinux.org/title/PostgreSQL)

# Table of Contents

- [Install Instructions](#install-instructions)
- [Seed a Database](#seed-a-database)

## Install PostgreSQL

1. Install

```bash
sudo pacman -S yay     # if not already installed
yay postgresql pgadmin4
```

1. Setup posgresql service

```bash
sudo -u postgres -i     # login as postgres
initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data/'
sudo systemctl enable --now postgresql
sudo systemctl status PostgreSQL    # check for any errors
```

1. Setup password

```bash
psql -U postgres
postgres = # \password    # to set password
```

1. Setup connection security

```bash
su
cd /var/lib/postgres/data
cp pg_hba.conf pg_hba.conf.backup
nano pg_hba.conf
```

## Seed a Database

- login as postgres

```bash
sudo -u postgres -i
```

- cd to working/project directory

```bash
cd [folder]
```

- seed database

```bash
psql < filename.sql
```
