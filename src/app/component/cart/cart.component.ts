import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any =[];
  public grandTotal !: number;

  constructor(private cardservice : CartService) { }

  ngOnInit(): void {
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cardservice.getTotalPrice();
    })

   
  }
  removeItem(item: any){
      this.cardservice.removeCartItem(item);
  }
  emptyCart(){
    this.cardservice.removeAllCart();
  }

}
