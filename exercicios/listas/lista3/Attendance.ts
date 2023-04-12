import { CellPhone } from "./CellPhone";
import { Client } from "./Cliente";
import { Employee } from "./Employee";
import { Service } from "./Service";

class Attendance {
    private id: number;
    private date: Date;
    private client: Client;
    private employee: Employee;
    private service: Service;

    constructor(id: number, date: Date, client: Client, employee: Employee, service: Service) {
        this.id = id
        this.date = date
        this.client = client
        this.employee = employee
        this.service = service
    }

    getService(): Service {
        return this.service
    }
    getClient(): Client {
        return this.client
    }
    getEmployee(): Employee {
        return this.employee
    }

    toString(): string {
        return `Id: ${this.id} Date: ${this.date}\nClient: ${this.client.toString()}\nEmployee: ${this.employee.toString()}\nService: ${this.service.toString()}`
    }
}

let obj1CellPhone = new CellPhone(110, 991289052, "Claro")
let objClient = new Client(1, "Leandro", "1234", obj1CellPhone)
let obj2CellPhone = new CellPhone(120, 981267722, "Vivo")
objClient.addCellPhone(obj2CellPhone)
let objEmployee = new Employee(1, 100, "Vinicius")
let objService = new Service(1, "Escova", 80)

let objAttendance = new Attendance(1, new Date(), objClient, objEmployee, objService)

console.log(objAttendance.toString())

console.log(objAttendance.getService().getPrice())
console.log(objAttendance.getClient().getName())
console.log(objAttendance.getEmployee().getName())