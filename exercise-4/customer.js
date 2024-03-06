"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age; 
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    Customer.prototype.getAge = function () {
        console.log("My age is ".concat(this._age));
    };
    return Customer;
}());
exports.Customer = Customer;
