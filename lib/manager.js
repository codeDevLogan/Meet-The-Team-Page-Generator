const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email); //Sends up the information needed by the Employee superclass to allow it to create the base of the Intern subclass.

        this.office = office;
    }

    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.office;
    }
    
    printManagerInfo() {
        console.log('Manager Info:\n');

        this.printEmployeeInfo();
        
        console.log(`Office Number: ${this.office}`);
    }

    generateManagerCard() {
        return `
        <div class="card mb-3 col-3 mx-1">
            <div class="card-header text-white bg-primary fs-2"><h1>${this.name}</h1>
                <h2>&#9749; Manager</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">Office Number: ${this.office}</li>
                    </ul>
                </h5>
            </div>
        </div>
`
    }
}

module.exports = Manager;