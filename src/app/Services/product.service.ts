import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

  interface AllProduct {
    id:number
    title: string;
    description: string;
    category: string;
    price: Number;
    image: string;
 
  }
  

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetAllProduct(){
    return this.http.get<AllProduct[]>('https://dummyjson.com/products')
  }
}
