FROM maven:3.6.3-openjdk-15 AS builder
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package -Pdev -Dmaven.test.skip=true -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true

FROM adoptopenjdk/openjdk15:jre-15.0.1_9
WORKDIR /app
COPY --from=builder /usr/src/app/target/*.jar /app/app.jar
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE 3281
CMD ["java","-jar","app.jar"]