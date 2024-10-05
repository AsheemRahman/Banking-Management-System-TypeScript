
import { Account } from '../models/Account';

export class BankService {
    private accounts: Account[] = [];

    addAccount(account: Account): void {
        this.accounts.push(account);
        console.log("Account successfully added.");
    }

    findAccount(accountNumber: string): Account | undefined {
        return this.accounts.find(account => account['accountNumber'] === accountNumber);
    }

    deposit(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.deposit(amount);
        } else {
            console.log("Account not found.");
        }
    }

    withdraw(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.withdraw(amount);
            // console.log(`Withdrew ${amount} from account ${accountNumber}`)
        } else {
            console.log("Account not found.");
        }
    }

    printAccountDetails(accountNumber: string): void {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.getAccountDetails();
        } else {
            console.log("Account not found.");
        }
    }
}
