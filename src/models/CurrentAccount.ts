
import { Account } from './Account';

export class CurrentAccount extends Account {

    constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
        super(accountNumber, accountHolder, initialBalance);
    }

    withdraw(amount: number): void {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Withdrawal exceeds overdraft limit or invalid amount.");
        }
    }
}
