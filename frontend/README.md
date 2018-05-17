# asset-wizard frontend

## Getting Started

### How to Build

Run `yarn install --pure-lockfile` first in this directory, then run `yarn run build`.

Or run `docker-compose run --rm build-frontend` in project root directory, to build on container.

### How to run service in local

Firstly run PostgreSQL and backend service in your local. See [backend/README.md](../backend/README.md) for detail.

Then run `yarn start` in this directory, then you can access this service at http://localhost:3000/.
