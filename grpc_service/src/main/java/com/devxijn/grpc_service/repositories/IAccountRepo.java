package com.devxijn.grpc_service.repositories;

import com.devxijn.grpc_service.entity.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepo extends MongoRepository<Account, String> {
}
