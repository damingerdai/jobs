# Jobs
----

`jobs` is a simple schedule jobs management systems based on [spring boot](https://spring.io/projects/spring-boot/), [quartz](http://www.quartz-scheduler.org/) and [react](https://reactjs.org/).

![job-list](https://raw.githubusercontent.com/damingerdai/jobs/master/screenshots/job-list.png)
![job-create-dark](https://raw.githubusercontent.com/damingerdai/jobs/master/screenshots/job-create-dark.png)
![changelogs](https://raw.githubusercontent.com/damingerdai/jobs/master/screenshots/changelogs.png)

## Requirement

1. [docker](https://www.docker.com/)
2. [java](http://jdk.java.net/17/)
3. [nodejs](https://nodejs.org/en/)

## Setup

### Datasource

create a docker network(only first).

```shell script
docker network create daming-jobs
```

create a docker volume(only first).

```shell script
docker volume create --name=daming-jobs
```

setup a postgresql db.

```shell script
docker-compose up db
# db uses an image, skipping
# docker-compose up --force-recreate db
```

run postgresql migrate.

for Linux or Mac:

```shell script
./gradlew flywayMigrate
```

for Windows:

```shell
./gradlew.bat flywayMigrate
```

### Run

#### Back End

To run the application, run the following command in a terminal window (in the complete) directory:

```shell
./gradlew bootRun (./gradlew.bat bootRun for windows)
```


#### Front End

navigate to the `src/main/react` directory,

install 3rd dependencies(only first)

```shell
yarn
```

run the react

```shell
yarn start
```

open the [browser](http://localhost:3000/)
![login](https://raw.githubusercontent.com/damingerdai/jobs/master/screenshots/login.png)

####  Swagger UI

`jobs` support [swagger ui](http://127.0.0.1:8443/swagger-ui/index.html).
![swagger-ui](https://raw.githubusercontent.com/damingerdai/jobs/master/screenshots/swagger-ui.png)