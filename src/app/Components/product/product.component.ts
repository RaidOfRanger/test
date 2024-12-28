import { Component } from '@angular/core';
import { AllProduct } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  AllProduct :AllProduct[]=[]
  sortAscending = true;


  constructor(private productserve: ProductService){}

  ngOnInit(){
    this.productserve.GetAllProduct().subscribe((res: any)=>{
      this.AllProduct = res.products
    },(err)=>{
      console.log("fetch product error",err);
    })

  }

  sortProductsByPrice() {
    this.sortAscending = !this.sortAscending;

    this.AllProduct.sort((a: any, b:any) =>
      this.sortAscending ? a.price - b.price : b.price - a.price
    );
  }

}
