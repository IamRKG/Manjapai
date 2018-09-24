import {Orders} from '../../orders/orders-interface/orders' 

export interface AccountInfo {
    id:string
    index:number,
    isActive:boolean,
    picture:string,
    name:Name,
    company:string,
    email:string,
    phone:number,
    address:string,
    about:string
    registered:string,
    latitude:number,
    longitude:number,
    orders:Orders
}

interface Name {
    first:string,
    last:string
}