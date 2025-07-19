#!/bin/bash

#protoc -I=../server/proto \
#  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/generated \
#  ../server/proto/helloworld.proto

#file chỉ định
#protoc -I=../grpc_service/src/main/proto \
#    --js_out=import_style=commonjs:src/generated \
#    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/generated \
#    ../grpc_service/src/main/proto/hello.proto
#typescript
# protoc -I=../grpc_service/src/main/proto \
#     --js_out=import_style=commonjs:./src/generated \
#     --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/generated \
#     ../grpc_service/src/main/proto/*.proto
protoc \
    --ts_out="./src/generated" \
    --proto_path src/proto/item.proto