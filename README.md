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
```

```shell script
gradle flywayMigrate
```