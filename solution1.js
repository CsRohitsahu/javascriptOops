class BankAccount{
    
   
    constructor(name,currentBalance){
        this.name=name;
        this.currentBalance=currentBalance;
    }
    deposit(amount){
        if(amount>0){
             this.currentBalance+=amount
             console.log(`deposited Rs. ${amount}. New balance Rs:${this.currentBalance}`);
        }
        else console.log("Invalid deposit amount. Please enter a positive amount");


    }
    withdraw(amount){
        if(amount>0){

        if(amount<=this.currentBalance){
            this.currentBalance-=amount;
            console.log(`Withdrawn Rs:${amount}. new balance is ${this.currentBalance}`);
        }
        else console.log("Insufficient funds for withdrawal");
    }
    else console.log("Invalid withdrawal amount. Pleae enter a positive value");

    }
    checkBalance(){
        console.log(`Account balance for ${this.name}: Rs. ${this.currentBalance}`);

    }

}

const myAccount=new BankAccount("Rohit",1000)
myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200)
myAccount.withdraw(1500)
myAccount.withdraw(-500)

myAccount.checkBalance()



