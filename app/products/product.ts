export interface IProduct {
    productId: number;
    name: string;
    code: string;
    available: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;
}

export class Product implements IProduct {
    productId: number;
    name: string;
    code: string;
    available: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;

    constructor() { 
        this.productId = 0;
        this.name = '';
        this.code = '';
        this.available = '';
        this.description = '';
        this.price = 0;
        this.rating = 0;
        this.imageUrl = '';
    }
}