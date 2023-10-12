import { getLocaleDateFormat } from "@angular/common";

export class Order {
    id: number = 0;
    date: string = "";
    description: string = "";
    total: number = 0;
    status: string = "NEW";
    customerId: number = 0;

}