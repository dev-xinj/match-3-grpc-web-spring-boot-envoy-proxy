package com.devxijn.grpc_service.service.impl;

import com.devxijn.grpc_service.entity.Account;
import com.devxijn.grpc_service.repositories.IAccountRepo;
import com.devxijn.grpc_service.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    IAccountRepo accountRepo;

    @Autowired
    AccountServiceImpl(IAccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    @Override
    public String save(Account account) {
        return accountRepo.save(account).getId();
    }

    @Override
    public Account findById(String id) {
        return accountRepo.findById(id).orElseGet(null);
    }
}
