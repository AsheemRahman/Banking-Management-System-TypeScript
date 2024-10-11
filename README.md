# Banking Management System

A simple Banking Management System implemented in TypeScript using Object-Oriented Programming (OOP) principles. This project demonstrates the concepts of inheritance and polymorphism through a basic banking application.

## Features

- **Account Management**: Create and manage different types of bank accounts.
- **Deposits and Withdrawals**: Perform deposits and withdrawals on accounts.
- **Account Listing**: List all accounts and their details.

## Technologies Used

- TypeScript
- Node.js (optional for running the project)
- OOP Principles

## Classes

1. **Account**: Base class for all account types.
   - Properties: `accountNumber`, `accountHolder`, `balance`
   - Methods: `deposit()`, `withdraw()`, `getDetails()`

2. **SavingsAccount**: Inherits from `Account` and adds an interest rate.
   - Additional Property: `interestRate`
   - Overridden Method: `getDetails()`

3. **CurrentAccount**: Inherits from `Account` and adds an overdraft limit.
   - Additional Property: `overdraftLimit`
   - Overridden Method: `getDetails()`

4. **Bank**: Manages all bank accounts.
   - Properties: `accounts` (array of `Account`)
   - Methods: `addAccount()`, `listAccounts()`, `findAccount()`

## Installation

1. Clone the repository:
   ```bash
   git clone  https://github.com/AsheemRahman/Banking-Management-System-TypeScript.git
   cd Banking-Management-System-TypeScript
2. Install dependencies:
   ```bash
   npm install
3. Compile TypeScript to JavaScript
   ```bash
   tsc
4. Run the application:
   ```bash
   node public/index.js
