# Bank Account Manager

This project serves as an interactive bank account manager, allowing one to create and keep track of multiple users back accounts
through depositing/withdrawing money, while also determining interest rates through a certain period in years.

## Description

Java Spring Boot serves as the framework in creating the backend of this application. A MySQL database is being used to keep track of
all accounts and performs CRUD operations to create users, access all their info, update user balance, and delete (close) user accounts.
For the frontend, React.js is being used, along with bootstrap to design the layout of the overall application and what is seen on the page.
Axios is used to handle HTTP requests from the browser, fetching data from RESTful APIs.

## Getting Started

### Dependencies

* Maven 
* MySQL Connector
* Lombok
* Spring Data JPA
* Spring Boot Starter Web
* NPM
* NPX
* Bootstrap
* React Router Dom
* Axios

### Installing

* git clone https://github.com/adrianparas/FullStackBankAccount.git
* After logging into your MySQL workbench, create a database named BankAccount_db through the "create database BankAccount_db" command
* Setup react frontend: npx create-react-app bankaccount_frontend
* cd into bankaccount_frontend 
* replace the src folder in the frontend folder with one from the original github repository
* Execute these commands in order: npm install react-router-dom -> npm install bootstrap -> npm install axios

### Executing program

* Make sure the MySQL service is running on your system
* Run the Spring Boot application file (BankaccountApplication.java)
* cd into your bankaccount_frontend folder
* Run the command: npm start

### Application Overview

Manager
<img width="920" alt="image" src="https://github.com/adrianparas/FullStackBankAccount/assets/97486758/6674d73b-b88d-4523-b6c4-693b8b379ce0">

Creating a new Account
<img width="1079" alt="image" src="https://github.com/adrianparas/FullStackBankAccount/assets/97486758/150ffcc9-e595-455f-ab24-a57a946de3f5">

Account Details
<img width="436" alt="image" src="https://github.com/adrianparas/FullStackBankAccount/assets/97486758/12dbf113-6cc7-4c7d-8962-dbbbd017d381">

Deposit Form
<img width="1156" alt="image" src="https://github.com/adrianparas/FullStackBankAccount/assets/97486758/4ecbe896-e92d-4427-9f05-0aa57b1aee6c">

Withdraw Form
<img width="1090" alt="image" src="https://github.com/adrianparas/FullStackBankAccount/assets/97486758/af6d7c99-14e2-44bb-9190-eb88973a2795">

Interest Calculator
<img width="1070" alt="image" src="https://github.com/adrianparas/FullStackBankAccount/assets/97486758/082e7d8b-c625-436e-a817-5061d6174195">


## Authors

Contributors names and contact info

Adrian Paras
[@LinkedIn](https://www.linkedin.com/in/adrian-paras-b7b656181/)

## Version History
    * Initial Release
