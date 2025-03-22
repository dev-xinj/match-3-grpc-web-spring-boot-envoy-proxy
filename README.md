# Build Envoy proxy

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