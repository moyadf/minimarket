import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { dirConfig } from './dir.config';

import { RouterConfig, RouterDeclarations } from './router.config';

import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';
import { ProductsModel } from './model/products.model';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterConfig ],
  declarations: [ AppComponent, HelloComponent, dirConfig, RouterDeclarations ],
  bootstrap:    [ AppComponent ],
  providers : [ProductsModel, StorageService, CartService],
})
export class AppModule { }
