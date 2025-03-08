package com.devxijn.grpc_service.service;

import com.devxijn.grpc_service.entity.HelloReply;
import com.devxijn.grpc_service.entity.HelloRequest;
import com.devxijn.grpc_service.entity.SimpleGrpc;
import io.grpc.stub.StreamObserver;
import org.springframework.grpc.server.service.GrpcService;

@GrpcService
public class HelloService extends SimpleGrpc.SimpleImplBase {
    @Override
    public void sayHello(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
        String message = request.getName();

        HelloReply reply = HelloReply.newBuilder().setName("Hello reply").build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();

    }
}
