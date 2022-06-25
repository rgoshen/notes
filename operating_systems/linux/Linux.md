# Linux

### Basic Linux CLI Commands

## Table of Contents

- [Basic Commands](#basic-commands)
- [PostgreSQL Commands](#postgresql-commands)

## Linux Flavors

- [Manjaro](./Linux.manjaro.md)

## Basic Commands

### Change Owner

```bash
sudo chown -R [username] /[path to file or folder]
```

`-R`: recursive

### Change Permissions

```bash
sudo chmod -R ugo+rwx /[path to file or folder]
```

`-R`: recursive

u = user g = group o = other

r = read w = write x = execute

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## PostgreSQL Commands

- check postgreSQL service status

```bash
sudo service postgresql status
```

- start postgreSQL service

```bash
sudo service postgresql start
```

- stop postgreSQL service

```bash
sudo service postgresql stop
```

- run postgreSQL

```bash
sudo service postgresql start
sudo -u postgres psql
```

- seed a database (make sure you are in the project directory)

```bash
psql < filename.sql
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
