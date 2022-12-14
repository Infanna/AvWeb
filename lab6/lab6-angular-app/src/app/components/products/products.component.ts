import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
      private productService: ProductsService,
      private cartService: CartService, 
    ) { }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productService.getAllProduct()
  }

  addToCart(p_id: number){
    this.cartService.add(p_id)
  }

}
