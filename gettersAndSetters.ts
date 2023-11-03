class BankAccout {
  public name: string;
  private type: string;
  private balance: number;

  constructor(name: string, type: string, balance: number) {
    this.name = name;
    this.type = type;
    this.balance = balance;
  }
  // getter
  get balance1(): number {
    return this.balance;
  }
  //   getBalance() {
  //     return `Your balance is:  ${this.balance}`;
  //   }

  // set amount
  set balance2(amount: number) {
    this.balance = this.balance + amount;
  }
  //   addDeposit(amount: number) {
  //     return `Your current balance is: ${this.balance + amount}`;
  //   }
}

class StudentAccount extends BankAccout {
  test() {}
}

const account1 = new BankAccout("Tanbir", "Savings", 2000);
//   console.log(account1.addDeposit(2000));
//   console.log(account1);

// console.log(account1.balance1);
account1.balance2 = 30;
console.log(account1.balance2);
