import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../model/products.model';

@Component({
  template:`

  
  <section class="main-container">
    <div class="ui two column padded grid">
      <div class="ten wide column">
      <div class="ui divider"></div>
        <productslist-dir 
          (refresh)="ref($event)"
          [allProductList]="products.data"
          [searchedText]="searchText"
          [sortingBy]="sortOption"
          ></productslist-dir>
      </div>
      <div class="six wide column">
      <div class="ui divider"></div>
        <cart 
          *ngIf="cartflag"        
          ></cart>
      </div>
    </div>
  </section>
  
  `,
  styles: [`
    .main-container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin: 30px auto;
      max-width: 1200px;
      width: 100%;
    }

    @media (max-width: 766px) and (min-width: 320px) {
      .main-container {
        flex-flow: column nowrap;
      }
    }
  `]
})

export class ProductsPage{
    public cartflag:boolean= false;
  constructor (
    public products:ProductsModel
    
    ){

  }
  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 10 )
  }
  

}