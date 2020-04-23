import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'productslist-dir',
  template: `
  
    <div class="container">
      <div class="wrapper">
        <div class="gird-minimarket bordered">
          <div class="brick" *ngFor = "let item of __allprdts">
            <div class="brick--flex" (click)="addToCart(item.p_id,1,'')">
              <img src="{{item.product_image}}">
              <h6 class="card-title font-weight-bold">{{item.product_name}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  `,
  styles: [`
    .gird-minimarket {
      transition: all .5s ease-in-out;
      column-gap: 30px;
      column-fill: initial;
    }

    .gird-minimarket .brick {
      margin-bottom: 30px;
      display: inline-block;
      vertical-align: top;
    }

    .gird-minimarket .brick--flex {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    .gird-minimarket .brick img {
      transition: all .5s ease-in-out;
      backface-visibility: hidden;
    }

    .gird-minimarket .brick:hover img {
      opacity: .75;
    }

    .gird-minimarket.bordered {
      column-gap: 50px;
    }

    .gird-minimarket.bordered .brick {
      padding-bottom: 25px;
      margin-bottom: 25px;
    }

    .gird-minimarket.gutterless {
      column-gap: 0;
    }

    .gird-minimarket.gutterless .brick {
      margin-bottom: 0;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      .gird-minimarket {
        column-count: 2;
      }
    }

    @media only screen and (min-width: 1024px) {
      .gird-minimarket {
        column-count: 3;
      }
    }
  `]
})
export class ProductsListDir {
  constructor(
    public storage: StorageService,
    public cart: CartService
  ){

  }

  @Input("allProductList") __allprdts: any = {};
  @Input("searchedText") __searchedProduct: string='';
  @Input("sortingBy") sortByOption: string='';
  
  @Output() refresh:EventEmitter<string> = new EventEmitter(); 

  ngOnInit(){
    this.sortByOption = 'product_name';
  }
  addToCart(productId,productQty){    
    this.cart.allItems = this.__allprdts;
    this.cart.addToCart(productId,productQty,'');
    this.refresh.emit(true);
  }

  

}


