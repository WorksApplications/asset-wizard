# asset-wizard

[![Build Status](https://www.travis-ci.com/WorksApplications/asset-wizard.svg?branch=master-react)](https://www.travis-ci.com/WorksApplications/asset-wizard)

## Getting Started

### How to build

This service needs JDK and yarn to build. See README.md in each sub directories.

### How to run service in local

Run `docker-compose up frontend` in this project root directory, then necessary middlewares run in container and you can access http://localhost:8080/.

### How to run integration test in local

After you launch service by `docker-compose up -d frontend`, run `docker-compose run integration-test` then it launches Selenium Hub and run integration tests in integration-test sub directory.

## Copyright and License

Copyright 2018 Works Applications Co.,Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
