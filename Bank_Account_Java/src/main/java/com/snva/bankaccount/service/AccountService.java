package com.snva.bankaccount.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.snva.bankaccount.entity.Account;
import com.snva.bankaccount.repository.AccountRepository;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public Account createAccount(@Validated @RequestBody Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

     public ResponseEntity<Account> findById(@PathVariable(value="id") Long id)
        throws Exception {
        Account account = accountRepository.findById(id).orElseThrow(()->new Exception("Account not found for this id: "+id));
        return ResponseEntity.ok().body(account);
    }

    public ResponseEntity<Account> depositAmount(@PathVariable(value="id") Long id, @RequestBody double amount)
        throws Exception {
        Account account = accountRepository.findById(id).orElseThrow(()->new Exception("Account not found for this id: "+id));
        account.deposit(amount);
        
        final Account updatedAccount = accountRepository.save(account);
        return ResponseEntity.ok(updatedAccount);  
    }

    public ResponseEntity<Account> withdrawAmount(@PathVariable(value="id") Long id, @RequestBody double amount)
        throws Exception {
        Account account = accountRepository.findById(id).orElseThrow(()->new Exception("Account not found for this id: "+id));
        account.withdraw(amount);
        
        final Account updatedAccount = accountRepository.save(account);
        return ResponseEntity.ok(updatedAccount);  
    }

    public Map<String, Boolean> deleteAccount(@PathVariable(value="id")Long accountId) 
        throws Exception {
            Account account = accountRepository.findById(accountId).orElseThrow(()->new Exception("Account not found for this id: "+ accountId));
            accountRepository.delete(account);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", true);
            return response;
    }
}
