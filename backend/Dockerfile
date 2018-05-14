# gradle:jdk8-alpine has following problem, so we install gradle manually during build
# https://github.com/keeganwitt/docker-gradle/issues/29
FROM openjdk:8-jdk-alpine as builder

# download gradle first, to cache container image with gradle
COPY ./gradle /app/gradle
COPY ./gradlew /app/
RUN /app/gradlew -v

# build project and generates jar file into /app/build/libs directory
COPY . /app/
RUN cd /app && rm -rf build && ./gradlew check assemble


FROM openjdk:8-jre-alpine
COPY --from=builder /app/build/libs/asset-wizard-*.jar /app/asset-wizard.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/asset-wizard.jar"]
