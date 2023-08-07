package com.snva.bankaccount.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.snva.bankaccount.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    
}
