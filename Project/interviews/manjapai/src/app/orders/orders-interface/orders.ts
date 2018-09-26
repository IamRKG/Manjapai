import {Products} from '../products-interface/products';
export interface Orders {
    id: string;
    price: number;
    product: Products;
}
