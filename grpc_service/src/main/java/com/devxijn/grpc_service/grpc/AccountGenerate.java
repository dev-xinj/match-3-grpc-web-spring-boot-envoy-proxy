package com.devxijn.grpc_service.grpc;

import com.devxijn.grpc_service.entity.Account;
import com.devxijn.grpc_service.grpc.entity.AccountGrpc;
import com.devxijn.grpc_service.grpc.entity.AccountRequest;
import com.devxijn.grpc_service.grpc.entity.AccountResponse;
import com.devxijn.grpc_service.service.AccountService;
import io.grpc.stub.StreamObserver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.grpc.server.service.GrpcService;

@GrpcService
public class AccountGenerate extends AccountGrpc.AccountImplBase {
    @Autowired
    AccountService accountService;

    @Override
    public void save(AccountRequest request, StreamObserver<AccountResponse> responseObserver) {
        String id = accountService.save(Account.builder().userName(request.getUserName()).build());
        AccountResponse response = AccountResponse.newBuilder()
                .setId(id)
                .build();

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }

    @Override
    public void findById(AccountRequest request, StreamObserver<AccountResponse> responseObserver) {

        Account account = accountService.findById(request.getId());

        AccountResponse response = AccountResponse.newBuilder()
                .setId(account.getId())
                .setUserName(account.getUserName())
                .build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();

    }
}
