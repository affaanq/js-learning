class BankAccount {

  constructor () {

    this.balance = 0;
    this.transactions = [];

  
  }

  deposit(depositAmm) {

    if (depositAmm > 0) {

      this.transactions.push({ type: "deposit", amount: depositAmm })
      this.balance += depositAmm
      return `Successfully deposited $${depositAmm}. New balance: $${this.balance}`


    } else {

      return "Deposit amount must be greater than zero."
    }
  }

  withdraw(amount) {

    if (amount > 0 && (amount <= this.balance)) {

      this.transactions.push({type: "withdraw", amount: amount})
      this.balance -= amount
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`

    } else {

      return "Insufficient balance or invalid amount."
    }
  }

listAllDeposits() {
  const depositAmounts = this.transactions
    .filter(t => t.type === "deposit") // 1. Keep only deposits
    .map(t => t.amount);               // 2. Extract only the numbers

  return `Deposits: ${depositAmounts.join(",")}`;
}

listAllWithdrawals() {
  const withdrawalAmounts = this.transactions
    .filter(t => t.type === "withdraw") // 3. Ensure this matches your .push() type!
    .map(t => t.amount);

  return `Withdrawals: ${withdrawalAmounts.join(",")}`;
}

  checkBalance () {

    return `Current balance: $${this.balance}`
  }
}

const myAccount = new BankAccount();

// At least 2 deposits
myAccount.deposit(200); 
myAccount.deposit(150);

// At least 2 withdrawals
myAccount.withdraw(50);
myAccount.withdraw(30);

// One more transaction to reach the "five transactions" requirement
myAccount.withdraw(20);
