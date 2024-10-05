
import { Account } from './Account';

export class SavingsAccount extends Account {
    constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
        super(accountNumber, accountHolder, initialBalance);
    }

    withdraw(amount: number): void {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }
}
