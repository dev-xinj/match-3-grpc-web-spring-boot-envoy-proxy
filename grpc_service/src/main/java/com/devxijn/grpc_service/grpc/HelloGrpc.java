package com.devxijn.grpc_service.grpc;

import com.devxijn.grpc_service.entity.Account;
import com.devxijn.grpc_service.grpc.entity.HelloReply;
import com.devxijn.grpc_service.grpc.entity.HelloRequest;
import com.devxijn.grpc_service.grpc.entity.SimpleGrpc;
import com.devxijn.grpc_service.service.AccountService;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.grpc.server.service.GrpcService;

import java.sql.Timestamp;
import java.time.Instant;

@Slf4j
@GrpcService
public class HelloGrpc extends SimpleGrpc.SimpleImplBase {
    @Autowired
    AccountService accountService;

    @Override
    public void sayHello(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
        String message = request.getName();
        Account account = Account.builder()
                .userName(message)
                .startLogin(Timestamp.from(Instant.now()))
                .build();
        accountService.save(account);
        HelloReply reply = HelloReply.newBuilder().setName(message + " Hello reply").build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();

    }


    @Override
    public void streamHello(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
        for (int i = 1; i <= 5; i++) {
            HelloReply helloReply = HelloReply.newBuilder()
                    .setName("hello reply" + i)
                    .build();
            responseObserver.onNext(helloReply);
        }
        responseObserver.onCompleted();
    }
}
