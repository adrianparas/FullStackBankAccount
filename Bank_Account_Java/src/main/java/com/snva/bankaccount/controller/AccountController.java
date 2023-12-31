package com.snva.bankaccount.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.snva.bankaccount.entity.Account;
import com.snva.bankaccount.service.AccountService;

@RestController @CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class AccountController {

    @Autowired
    AccountService accountService;

    @PostMapping("/accountCreated")
    public Account createAccount(@Validated @RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @GetMapping("/")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @GetMapping("/accountId/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable(value="id") Long id) throws Exception {
        return accountService.findById(id);
    }

    @PutMapping("/accountDeposit/{id}")
    public ResponseEntity<Account> depositToAccount(@PathVariable(value="id")Long id, @RequestBody double amount) 
        throws Exception {
        return accountService.depositAmount(id, amount);
    }

    @PutMapping("/accountWithdraw/{id}")
    public ResponseEntity<Account> withdrawFromAccount(@PathVariable(value="id")Long id, @RequestBody double amount) 
        throws Exception {
        return accountService.withdrawAmount(id, amount);
    }

    @DeleteMapping("/deleteAccount/{id}")
    public Map<String, Boolean> deleteAccount(@PathVariable(value="id")Long accountId) 
        throws Exception {
            return accountService.deleteAccount(accountId);
    }

}
