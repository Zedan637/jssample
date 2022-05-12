class Account {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log("Parent class constructor")
    }
}
class savings_Account extends Account {
    min_Bal = 500;
    constructor(id, name, amount) {
        super(id, name);
        this.amount = amount;
        console.log("Child class constructor")
    }
    get_Bal() {
        return this.amount - this.min_Bal;
    }
}
class current_Account extends Account{
    min_Bal = 25000;
    constructor(id, name, amount) {
        super(id, name)
        this.amount = amount;
    }
    get_Bal() {
        return this.amount - this.min_Bal; 
    }
}
let c1 = new savings_Account(101, "rahul", 45000)
console.log(c1.get_Bal())
let c2 = new current_Account(102, "Sonia", 60000)
console.log(c2.get_Bal())
console.log(testcase123)
