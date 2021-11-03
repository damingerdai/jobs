# Jobs
----

## Setup

```shell script
docker network create daming-jobs
```

```shell script
docker volume create --name=daming-jobs
```

```shell script
docker-compose up db
# db uses an image, skipping
# docker-compose up --force-recreate db
```

```shell script
gradle flywayMigrate
```

## Swagger UI

`jobs` support [swagger ui](http://127.0.0.1:8443/swagger-ui/index.html).