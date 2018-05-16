# asset-wizard db

## Getting Started

### How to run database in local

Run `docker build -t assetwizard_db .` then it will build PostgreSQL container with SQL files in this directory. After that, run following command then you can connect to PostgreSQL via local 5432 port.

```bash
docker run -it \
  -e POSTGRES_DB=asset-wizard \
  -e POSTGRES_PASSWORD=ayush \
  -p 5432:5432 \
  assetwizard_db
```
