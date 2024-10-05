
import { CurrentAccount } from './models/CurrentAccount';
import { SavingsAccount } from './models/SavingAccount';
import { BankService } from './services/BankService';


const bankService = new BankService();


// Create accounts
const savingsAcc = new SavingsAccount("123456", "Asheem Rahman", 0);
const currentAcc = new CurrentAccount("987654", "Gokul G R", 0);


bankService.addAccount(savingsAcc);
bankService.addAccount(currentAcc);


//transaction
bankService.deposit("123456", 2000);
bankService.withdraw("123456", 100);
bankService.withdraw("987654", 100);


bankService.printAccountDetails("123456");
bankService.printAccountDetails("987654");