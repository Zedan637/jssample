class Address {
    constructor(hno, area, city, state) {
        this.hno = hno;
        this.area = area;
        this.city = city;
        this.state = state;
    }
    Update_Address() { }
}
class Savings_Account { 
    constructor(acc_Id, acc_Name, Amount, Address) {
        this.acc_Id = acc_Id;
        this.acc_Name = acc_Name;
        this.Amount = Amount;
        this.Address = Address;
    }
}
let c1 = new Savings_Account(101, "Rahul", 10000, new Address(1001, "Marathahalli", "Bangalore", "Karnataka"))
// let c2 = new Address(001, "Sname", "Banglore", "Karnataka")
console.log(c1)

// class Current_Account { }
