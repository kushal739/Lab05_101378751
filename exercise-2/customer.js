var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return Customer;
}());
var customer = new Customer("John", "Doe");
customer.greeter();
