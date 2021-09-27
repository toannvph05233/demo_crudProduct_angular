import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.products.push(new Product('Oto1', 50000, 'https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_01_28/a18.jpeg', true));
    this.products.push(new Product('Oto2', 50000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmlmWkziTNeg1im8dwWdO-9ILNA7rnleXvEAxGOODsSWN0m8CHskAeL-E6EoMrBNp2ls&usqp=CAU', false));
    this.products.push(new Product('Oto3', 50000, 'https://image.thanhnien.vn/1024/uploaded/tuyenth/2020_12_29/j3_mqjl.jpeg', false));
    this.products.push(new Product('Oto4', 50000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9X-0U3ODDd0oO7oW1MMYKMCPrIrQmjQ56bAzqijmHoT3oZYeo88pEcFVzXiGCM9VM1g&usqp=CAU', false));
  }

  deleteProduct(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1);
        return;
      }
    }
  }

  createProduct(product: Product) {
    this.products.push(product);
  }


  editProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === product.name) {
        this.products[i] = product;
      }
    }
  }


}
