//Intersection types

type Admin = {
    name: string;
    privilege: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const ren: ElevatedEmployee = {
    name: "Ren",
    privilege: ["admin"],
    startDate: new Date()
}

//type guard
function add(n1: string | number, n2: string | number) {
    if(typeof n1 === "string" || typeof n2 === "string"){
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}

type Mixed = Admin | Employee;

function printEmployeeInfo(el: Mixed) {
    console.log(el.name);
    //mixed type needs a type guard since some of the properites might be missing
    if("privilege" in el) {
        console.log(el.privilege);
    }
    if("startDate" in el) {
        console.log(el.startDate);
    }
}

class Car {
    honk() {
        console.log("Honking");
    }
}

class Truck {

    honk() {
        console.log("Honked by a truck");
    }

    loadCargo() {
        console.log("Loading cargo");
    }
}

function useVehicle(vehicle: Car | Truck) {
    vehicle.honk();

    if(vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}

const v1 = new Truck();
const v2 = new Car();

useVehicle(v1);
useVehicle(v2);

//type casting
const userEl = document.getElementById("my-element");

if(userEl) {    
    (userEl as HTMLParagraphElement).textContent = "Hello"
} 

//index properties
interface ErrorInterface {
    [prop: string]: string;
}

const formError: ErrorInterface = {
    email: "Incorrect email syntax"
}

//function overloads
