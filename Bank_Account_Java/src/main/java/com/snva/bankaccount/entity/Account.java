package com.snva.bankaccount.entity;

import com.snva.bankaccount.exception.InvalidAmountException;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "accountName")
    private String accountName;

    @Column(name = "accountNumber")
    private String accountNumber;

    @Column(name = "balance")
    private double balance;

    // @Column(name = "interestRate")
    public static double interestRate = 0.025;

    public Account(String accountName, String accountNumber, double balance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public Account() {}

    public void deposit(double amount) throws InvalidAmountException {
        if (amount <= 0.0) {
            throw new InvalidAmountException("Amount to be deposited should be greater than 0");
        }
        this.balance += amount;
    }

    public void withdraw(double amount) throws InvalidAmountException {
        if (amount <= 0.0 || amount > balance) {
            throw new InvalidAmountException("Amount to be withdrawn should be greater than 0 and less than your balance");
        }
        this.balance -= amount;
    }

    public double calculateInterest(int periodInYears) {
        return (balance * interestRate * periodInYears) / 100;
    }

}
