# Overview
![game1.png](docs/game1.png)
# Project Structure
- **client/**: Contains the gRPC-Web client code.
- **grpc_service/**: Contains the gRPC server code written in Spring Boot.
- **envoy/**: Envoy configuration file.
# Prerequisites

- **Spring boot / server**
- **Grpc-web**
- **Nodejs and npm / client**
- **Protoc compiler**

Source: Code referenced from example: https://github.com/ehsaniara/gRPC-web-example
# How To Clone Repo And Start App

## Using Envoy Internal Docker Environment and Client-side and Server-side External Docker

To create grpc-server with spring boot, if anyone doesn't know, you can see the instructions at the following link.
[Spring-boot-grpc-server](https://docs.spring.io/spring-grpc/reference/index.html)

Docs Webback
[Webpack-tutorial](https://webpack.js.org/guides/getting-started/)



Create a file ```Dockerfile```

```Dockerfile 
FROM envoyproxy/envoy:v1.24.0
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
```

Here i use version ```envoy:v1.24.0```

Configuration similar to ```envoy.yml``` file

Notes:

You have to configure cluster match ip in your machine and client server port similar to below

```yaml
  clusters:
    # Cluster for the gRPC backend
    - name: grpc_backend
      connect_timeout: 0.25s
      type: STRICT_DNS
      lb_policy: ROUND_ROBIN
      http2_protocol_options: { }  # Enable HTTP/2 for gRPC communication
      load_assignment:
        cluster_name: grpc_backend
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: IP_Address #grpc-server  # Ip local laptop/pc
                      port_value: 9090     # Port where gRPC server is running

    # Cluster for serving static files
    - name: static_files
      connect_timeout: 0.25s
      type: STRICT_DNS
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: static_files
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: IP_Address #grpc-web-client  # Ip local laptop/pc
                      port_value: 8081          # Port webpack - where the Spring boot server is serving static files
```

```IP_Address``` is your computer address

This is the case where you install envoy proxy into Docker and the server-side and client-side will run an environment
outside of docker.
Below is the case where we build everything into the docker environment, this will be much simpler

In client-side from ```src``` - if you are using Webpack

Generate file `.proto` from file `generate.sh`

```shell
protoc -I=../grpc_service/src/main/proto \
    --js_out=import_style=commonjs:src/generated \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/generated \
    ../grpc_service/src/main/proto/hello.proto
```

```npm
Step 1:
    npm install
    
Step 2:
    npm run build
    
Step 3: Start webback
    npm start
```

In Server-side from file `application.properties`

Set `port 9090` to match the port configured in the `envoy.yml` file.

Final start grpc-server

```bash
  ./mvnw spring-boot:run
```

Run command line

```bash
    docker build -t envoy:v1 .
    docker run -p 127.0.0.1:8080:8080 envoy:v1
```

Envoy proxy: [127.0.0.1:8080](http://127.0.0.1:8080/)

Grpc-client: [127.0.0.1:8081](http://127.0.0.1:8081/)

Grpc-server: [127.0.0.1:9090](http://127.0.0.1:9090/)


## Using Envoy Internal Docker Environment and Client-side and Server-side Internal Docker Environment

Configure Build Envoy with Docker

Do the same for Envoy as the configuration step above but `IP_Address` will be the name of the service defined in the lower part of the `docker-compose.yml` file.

See more at [`network`](https://docs.docker.com/compose/how-tos/networking/).

Part of `envoy.yaml` file
```yaml
  clusters:
    # Cluster for the gRPC backend
    - name: grpc_backend
      connect_timeout: 0.25s
      type: STRICT_DNS
      lb_policy: ROUND_ROBIN
      http2_protocol_options: { }  # Enable HTTP/2 for gRPC communication
      load_assignment:
        cluster_name: grpc_backend
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: grpc-server #grpc-server  # Name of the gRPC server service in Docker Compose
                      port_value: 9090     # Port where gRPC server is running

    # Cluster for serving static files
    - name: static_files
      connect_timeout: 0.25s
      type: STRICT_DNS
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: static_files
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: grpc-web-client #grpc-web-client  # Name of the client service in Docker Compose
                      port_value: 8081          # Port where the Spring boot server is serving static files

```
Then add `Dockerfile` configuration for client side. Same as below. Here I use `port 8081` for `client-side`
```Dockerfile
# client/Dockerfile

# Use a recent Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (if you are using Webpack)
RUN npm run build

# Expose the port the app runs on
EXPOSE 8081

# Command to run the app
CMD ["npm", "start"]

```
Next configure the dockerfile file inside the server-side directory `Java Spring Boot Grpc`
```dockerfile
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
```
See more at: [`Dockerfile reference`](https://docs.docker.com/reference/dockerfile/)

Finally, create `docker-compose.yml` file inside the project folder and outside the folder containing `server` and `client`
```yml
services:
  grpc-server:
    build:
      context: ./grpc_service
      dockerfile: Dockerfile
    networks:
      - grpc-network

  grpc-web-client:
    build:
      context: ./client
      dockerfile: Dockerfile
    ports:
      - "8081:8081"  # Serve the static files on port 8081
    networks:
      - grpc-network

  envoy:
    image: envoyproxy/envoy:v1.24.0
    volumes:
      - ./envoy/envoy.yaml:/etc/envoy/envoy.yaml
    ports:
      - "8080:8080"  # Envoy listens on port 8080
    depends_on:
      - grpc-web-client
      - grpc-server
    networks:
      - grpc-network

networks:
  grpc-network:
    driver: bridge
```

After all, run the command 
```bash
docker compose up -d
```
Application: [127.0.0.1:8081](http://127.0.0.1:8081/)