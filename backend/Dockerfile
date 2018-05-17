FROM openjdk:8-jre-alpine

COPY ./build/libs/asset-wizard-*.jar /asset-wizard.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/asset-wizard.jar"]
