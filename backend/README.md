# asset-wizard backend

## Getting Started

### How to Build

Run `./gradlew build` in this directory.

Or run `docker-compose run --rm build-backend` in project root directory, to build on container.

### How to run service in local

Firstly run PostgreSQL in your local. See [db/README.md](../db/README.md) for detail.

Then run `./gradlew bootRun` in this directory, then you can access this service at http://localhost:8080/.
