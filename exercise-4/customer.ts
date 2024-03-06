export class Customer {
    firstName: string;
    lastName: string;
    private _age: number; 
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age; 
    }

    greeter() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }

    getAge() {
        console.log(`My age is ${this._age}`);
    }
}
