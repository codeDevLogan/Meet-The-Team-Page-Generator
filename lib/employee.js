class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }

    printEmployeeInfo() {
        console.log(`Name: ${this.name}
ID: ${this.id}
Email: ${this.email}
`)
    }
}

module.exports = Employee;