import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, ProductListComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = ['Food', 'Drinks', 'Sauce', 'Desert','Favorite'];
  products: {
    id: number;
    name: string;
    price:string;
    category: string;
    likes: number;
    imageUrl: string;
    isLiked?: boolean;
    isFavorite?:boolean;
  }[];

  selectedCategory: string | null = null;
  selectedProducts: any[] = [];
  selectedFavorite: any[]=[];

  selectCategory(category: string) {
    this.selectedCategory = category;
  
    if (category === 'Favorite') {
      this.selectedProducts = this.selectedFavorite;
    } else {
      this.selectedProducts = this.products.filter(
        (product) => product.category === category
      );
    }
  }

  likeProduct(product: any) {
    console.log('app.likeProduct worked success');
    if (!product.isLiked) {
      product.likes++;
    } else {
      product.likes--;
    }
    product.isLiked = !product.isLiked;
    // console.log(product);
  }

  removeProduct(product: any) {
    this.products = this.products.filter((p) => p.id !== product.id);
    this.selectedProducts = this.selectedProducts.filter(
      (p) => p.id !== product.id
    );
    console.log('app.removeProduct worked success');
  }
  clickFavorite(product: any) {
    product.isFavorite = !product.isFavorite;
    
    if (product.isFavorite) {
      this.selectedFavorite.push(product);
    } else {
      this.selectedFavorite = this.selectedFavorite.filter(p => p.id !== product.id);
    }
  }

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Cheese Burger',
        price:'35$',
        category: 'Food',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Cheeseburger-new:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 2,
        name: 'Donut',
        price:'35$',
        category: 'Food',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-toffee-apple-doughnut:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 3,
        name: 'Beef Burger',
        price:'35$',
        category: 'Food',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-BigTasty-feb-promo:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 4,
        name: 'Salad',
        price:'35$',
        category: 'Food',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-side-salad-jan-promo:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 5,
        name: 'Fries',
        price:'35$',
        category: 'Food',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Fries-Medium-2:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 6,
        name: 'Coffee',
        price:'35$',
        category: 'Drinks',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Toffee-Latte-Regular-jan-promo:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 7,
        name: 'Juice',
        price:'35$',
        category: 'Drinks',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Tropicana-Orange-Juice-2:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 8,
        name: 'MilkShake',
        price:'35$',
        category: 'Drinks',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Strawberry-Milkshake-Medium-feb-promo:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 9,
        name: 'Water',
        price:'35$',
        category: 'Drinks',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Water-Deep-River-Rock-500ml:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 10,
        name: 'Cola',
        price:'35$',
        category: 'Drinks',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Diet-Coke-Medium-2:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 11,
        name: 'BBQ',
        price:'35$',
        category: 'Sauce',
        likes: 0,
        imageUrl:
          'https://media.istockphoto.com/id/680114220/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D1%83%D1%81-%D0%B3%D1%80%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=Hv4SNvicSIM008a2q8Kww51Kw3DkKQz-2b3PA9lbtB0=',
      },
      {
        id: 12,
        name: 'Tomato',
        price:'35$',
        category: 'Sauce',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Tangy-Tomato-Dip-1:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 13,
        name: 'Garlic',
        price:'35$',
        category: 'Sauce',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Butter-Portion:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 14,
        name: 'Sour Cream',
        price:'35$',
        category: 'Sauce',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Sour-Cream-Chive-Dip-40g:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 15,
        name: 'Salsa',
        price:'35$',
        category: 'Sauce',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Salsa-Dip-for-Mozzarella-Dippers-feb-promo:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 11,
        name: 'Donut',
        price:'35$',
        category: 'Desert',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-toffee-apple-doughnut:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 12,
        name: 'Apple Pie',
        price:'35$',
        category: 'Desert',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-ApplePie:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 13,
        name: 'Cookie',
        price:'35$',
        category: 'Desert',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Triple-Chocolate-Cookie-2:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 14,
        name: 'Muffin',
        price:'35$',
        category: 'Desert',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Mixed-Berry-Muffin-Xmas-2:product-header-desktop?wid=829&hei=455&dpr=off',
      },
      {
        id: 15,
        name: 'Brownie',
        price:'35$',
        category: 'Desert',
        likes: 0,
        imageUrl:
          'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-ChocolateBrownie:product-header-desktop?wid=829&hei=455&dpr=off',
      },
    ];
  }
}