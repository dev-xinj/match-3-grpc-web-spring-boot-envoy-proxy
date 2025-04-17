package com.devxijn.grpc_service.service;

import com.devxijn.grpc_service.entity.Account;

public interface AccountService {

    String save(Account account);

    Account findById(String id);
}
