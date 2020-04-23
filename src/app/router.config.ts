import { RouterModule, Routes } from '@angular/router';

import { ProductsPage } from './pages/products/products.pages';

const appRoutes: Routes = [
  { path : 'products' , component : ProductsPage },
  {
    path : '',
    redirectTo : '/products',
    pathMatch : 'full'
  }
]

export const RouterConfig = [
  RouterModule.forRoot(
    appRoutes,{
      enableTracing : false,
      useHash : false
  })

];

export const RouterDeclarations = [ ProductsPage ];


