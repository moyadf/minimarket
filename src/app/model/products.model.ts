import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
  public data : any = [
    {
      p_id : '1',
      product_name : 'Leche Alqueria',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '2000',
      product_image : 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3295320-750-750/7702177001783-1.jpg?v=636646652313570000'
    },
    {
      p_id : '2',
      product_name : 'Detodito BBQ',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '1800',
      product_image : 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3484424/7702189054043.jpg?v=637175561958030000'
    },
    {
      p_id : '3',
      product_name : 'Shampoo Elvive',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '12500',
      product_image : 'https://cdn.shopify.com/s/files/1/0024/7355/8105/products/Captura_de_pantalla_2019-01-14_a_la_s_10.46.10_538x.png?v=1571718517'
    },
    {
      p_id : '4',
      product_name : 'Detodito Paketon',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '4000',
      product_image : 'https://exitocol.vtexassets.com/arquivos/ids/1284035-800-auto?width=800&height=auto&aspect=true'
    },
    {
      p_id : '5',
      product_name : 'Arroz FlorHuila',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '2250',
      product_image : 'https://www.florhuila.com/wp-content/uploads/florhuila_con-vitaminas1.png'
    },
    {
      p_id : '6',
      product_name : 'Pasta doria',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '1950',
      product_image : 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/177575-1000-1000/7702085012482-1.jpg?v=636117824569630000'
    },
    {
      p_id : '7',
      product_name : 'Milo Ekonopack 1',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '8000',
      product_image : 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3471591/7702024056102-1.jpg?v=637111569561730000'
    },
    {
      p_id : '8',
      product_name : 'Zucariritas',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '17900',
      product_image : 'https://http2.mlstatic.com/cereal-kelloggs-zucaritas-740-gr-D_NQ_NP_638942-MLM31919873194_082019-F.jpg'
    },
    {
      p_id : '9',
      product_name : 'Detodito BBQ',
      product_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      product_price : '2500',
      product_image : 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3484424/7702189054043.jpg?v=637175561958030000'
    }
  ]
} 