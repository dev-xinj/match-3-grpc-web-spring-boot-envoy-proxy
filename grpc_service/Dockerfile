FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /build

COPY --chmod=0755 mvnw mvnw
COPY pom.xml ./.mvn ./
RUN --mount=type=bind,source=./pom.xml,target=pom.xml \
    --mount=type=bind,source=./src,target=src \
    mvn dependency:resolve

FROM build AS dev
COPY ./src ./src
CMD ["mvn","spring-boot:run"]