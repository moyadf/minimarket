import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector :'cart',
  template : `
  <div class="card text-center">
  <div class="card-header">
    Please choose a product on of the left

    <section class="button-cart-container">
      <div class="ui vertical animated button" tabindex="0">
        <div class="hidden content">{{cart.cartItemsList.length}}</div>
        <div class="visible content">
          <i class="shop icon"></i>
        </div>
      </div>

      <div class="ui red button" (click)="emptyCart()" *ngIf="cart.cartItemsList">
        Empty Cart       
      </div>
    </section>
  </div>

  <div class="card-body">

    <table class="ui small table">
      <thead>
        <tr>      
          <th scope="col">Product</th>
          <th scope="col">Desc</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        
        </tr>
        <tr *ngFor="let itm of cart.cartItemsList ">      
          <td class="text-left">
            <img class="ui tiny image" src="{{itm.img}}"/>
            <span style="display: block; text-align: center">{{itm.name}}</span>
          </td>
          <td>{{itm.desc}}</td>
          <td class="w30">

          <div class="ui labeled input">
            <div class="ui label" (click)="changeQty(itm.pid,1,'')">
              +
            </div>
            <input type="text" value="{{itm.qty}}" #qtyRef (keyup)="changeQty(itm.pid,qtyRef.value,'replace')">
            <div class="ui label less" (click)="changeQty(itm.pid,-1,'')">
              -
            </div>
          </div>
          </td>
        </tr>
        </tbody>
    </table>
    
  </div>
  <div class="ui green message">Total : COP. {{cart.cartTotal}}</div>

  <!-- no logre enteneder la integración con este API, no se si debia hacer un registro obligatoriamente para poder obtener las keys -->
  <form action="https://checkout.wompi.co/p/" method="GET">
    <!-- OBLIGATORIOS -->
    <input type="hidden" name="public-key" value="LLAVE_PUBLICA_DEL_COMERCIO" />
    <input type="hidden" name="currency" value="MONEDA" />
    <input type="hidden" name="amount-in-cents" value="MONTO_EN_CENTAVOS" />
    <input type="hidden" name="reference" value="REFERENCIA_DE_PAGO" />
    <!-- OPCIONALES -->
    <input type="hidden" name="redirect-url" value="URL_REDIRECCION" />
    <button type="submit">Pagar con Wompi</button>
  </form>
    
  
</div>
  `,
  styles : [`
  .table td {
    vertical-align : middle;
    font-size:1rem;
  }

  .button-cart-container {
    display: flex;
    margin: 10px 0;
  }

  .ui.labeled.input:not([class*="corner labeled"]) .label:first-child+input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 50px;
  }

  .ui.label.less {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }


  `]
})

export class AddToCartDir{
  
  constructor(
    public cart: CartService
  ){
    
  }

  
  changeQty(pid,qty,replace){
    if(qty !== ''){
      qty=parseInt(qty) || 1;
      this.cart.addToCart(pid,qty,replace);
    }else{
      this.cart.addToCart(pid,1,replace);
    }
    
  }

  emptyCart(){
    let cartStatus = confirm("Are you sure");
    if(cartStatus){
      this.cart.emptyCart();
      document.location.href = '/products';
    }
  }

}