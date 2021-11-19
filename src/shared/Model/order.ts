import { item } from "./item";
import { customer } from "./customer";

export class order{
    item!:item[]
    id!:number
    orderNo!:number
    customer!: customer
    paymentMode!:string
    orderDate!:Date
}