import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'Apple iPhone 16 Pro Max 256Gb черный', 'This is Apple iPhone 16 Pro Max 256Gb черный', '655 980', 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(2, 'Apple iPhone 16 Pro Max 256Gb', 'This is Apple iPhone 16 Pro Max 256Gb золотистый', '640 229', 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(3, 'Apple iPhone 13 128Gb синий', 'This is Apple iPhone 13 128Gb синий', '271 555', 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(4, 'Apple iPhone 13 128Gb белый', 'This is Apple iPhone 13 128Gb белый', '277 849', 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(5, 'Apple iPhone 16 128Gb черный', 'This is Apple iPhone 16 128Gb черный', '418 869', 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(6, 'Apple iPhone 13 128Gb зеленый', 'This is Apple iPhone 13 128Gb зеленый', '269 777', 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(7, 'Apple iPhone 14 128Gb черный', 'This is Apple iPhone 14 128Gb черный', '337 105', 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(8, 'Apple iPhone 15 256Gb черный', 'This is Apple iPhone 15 256Gb черный', '436 700', 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(9, 'Apple iPhone 13 128Gb розовый', 'This is Apple iPhone 13 128Gb розовый', '297 189', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=preview-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
      new Item(10, 'Apple iPhone 14 128Gb голубой', 'This is Apple iPhone 14 128Gb голубой', '349 336', 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h15/86042945683486.png?format=preview-large', 5.0, 'hhttps://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=EAIaIQobChMIzPmdm4nCiwMVC0KRBR1y5BaXEAAYASAAEgIRW_D_BwE'),
    );
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }