FROM gradle:8.6.0-jdk17-alpine AS builder
COPY src /usr/src/app/src
COPY *.gradle  /usr/src/app
RUN gradle build -x test --project-dir  /usr/src/app
 
FROM openjdk:20-jdk-slim
WORKDIR /app
COPY --from=builder /usr/src/app/build/libs/*.jar /app/app.jar
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE 3281
CMD ["java","-jar","app.jar"]