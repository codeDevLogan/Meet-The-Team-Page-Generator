const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email); //Sends up the information needed by the Employee superclass to allow it to create the base of the Engineer subclass.

        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }

    printEngineerInfo() {
        console.log('Engineer Info:\n');

        this.printEmployeeInfo();
        
        console.log(`GitHub Username: ${this.github}`);
    }

    generateEngineerCard() {
        return `
        <div class="card mb-3 col-3 mx-1">
            <div class="card-header text-white bg-primary fs-2"><h1>${this.name}</h1>
                <h2>&#9000; Engineer</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${this.github}">${this.github}</a></li>
                    </ul>
                </h5>
            </div>
        </div>
`
    }
}

module.exports = Engineer;