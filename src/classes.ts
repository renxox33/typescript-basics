class Department {
    private name: string;
    private employees: string[]= [];

    constructor(n: string, private readonly id: number) {
        this.id = id;
        this.name = n;
    }

    describe(this: Department) {
        console.log(`Department is ${this.name} and id is ${this.id}`);
    }

    addEmployees(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees);
    }

    get departmentName() {
        return this.name;
    }

    set departmentName(name: string) {
        this.name = name;
    }
};

let accounting = new Department("Accounting", 1);
accounting.addEmployees("Karl");
accounting.describe();

