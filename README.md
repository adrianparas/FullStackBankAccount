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
* MySQL
* Lombok
* Spring Data JPA
* NPM
* NPX

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

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

Adrian Paras
[@LinkedIn](https://www.linkedin.com/in/adrian-paras-b7b656181/)

## Version History
    * Initial Release
