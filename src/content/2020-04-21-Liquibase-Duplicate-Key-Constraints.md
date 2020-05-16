---
title: "Liquibase Duplicate Key Constraints"
date: "2020-04-21"
draft: false
path: "/software-engineering-journal/liquibase-duplicate-key-constaints"
---

During the production deployment of one of our services, we encountered a database error when running our liquibase migration. Additional details, the service that we’re trying to deploy already have an initial set of data. The error we encountered is this:

```bash
ERROR:  duplicate key violates unique constraint
```

This error happens because liquibase assumes that we’re migrating a fresh set of data, so it starts the primary key sequence at 1. [This can be solved by setting the primary key sequence at the right location](https://stackoverflow.com/a/21639138). Which can be done by running this query on your database console.

```sql
SELECT setval('primary_id_seq', (SELECT MAX(id) FROM table)+1);
```
This will set the primary key sequence to the next sequence which will prevent the error that we encountered. Ideally, when migrating with Liquibase on a services that has initial data, we should include the update query of the primary key sequence on our migration script.