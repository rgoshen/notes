---
id: HteOazgcLJbF1ZHVTbHSN
title: PostgreSQL
desc: 'PostgreSQL Notes and Instructions'
updated: 1643839256261
created: 1643691890553
---

[![postgresql](/assets/images/postgresql.png){display: block, margin: 0 auto, max-height: 400px}](https://www.postgresql.org/)

[![Postgres](https://img.shields.io/badge/Docs-postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/docs/)

# Table of Contents

1. ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white) [Basic Commands](#basic-commands)
   1. [cli](#cli)
   1. [psql](#psql)

## Basic Commands

### cli

- create database

```bash
createdb [database-name]
```

- open database

```bash
psql [database-name]
```

- seed database

```bash
psql < file-name.sql
```

- drop database

```bash
dropdb [database-name]
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### psql

- list all databases

```bash
/l
```

- connect to specific database

```bash
/c [db_name]
```

- list all tables in current database

```bash
/dt
```

- get details about a specific table

```bash
/d [table_name]
```

- quit psql

```bash
/q
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
