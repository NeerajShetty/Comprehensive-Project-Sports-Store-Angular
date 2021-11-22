import { item } from "./item";
import { customer } from "./customer";

export class order{
    item:item[]= new Array()
    id:number=0
    orderNo:number=0
    customer: customer= new customer
    paymentMode:string=" "
    orderDate:String=" "
}