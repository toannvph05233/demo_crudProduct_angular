import {Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

class Product {
  name: string;
  price: number;
  img: string;
  status: boolean;

  constructor(name, price, img, status) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.status = status;
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @ViewChild('inputName', {static: true}) inputName: ElementRef;
  // @ViewChild('showName', {static: true}) showName: ElementRef;

  products: Product[] = [];
  name: string = '';
  name2: number = 1;

  img: string = '';
  price: number = 0;


  constructor() {
    this.products.push(new Product('Oto1', 50000, 'https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_01_28/a18.jpeg', true));
    this.products.push(new Product('Oto2', 50000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmlmWkziTNeg1im8dwWdO-9ILNA7rnleXvEAxGOODsSWN0m8CHskAeL-E6EoMrBNp2ls&usqp=CAU', false));
    this.products.push(new Product('Oto3', 50000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9X-0U3ODDd0oO7oW1MMYKMCPrIrQmjQ56bAzqijmHoT3oZYeo88pEcFVzXiGCM9VM1g&usqp=CAU', false));
  }

  ngOnInit() {
    console.log('đang ở ngOnInit ')

  }

  deleteProduct(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1);
        return;
      }
    }
  }

  createProduct() {
    this.products.push(new Product(this.name, this.price, this.img, true));
    this.name = '';
    this.img = '';
    this.price = 0;
  }

  showEdit(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.name = this.products[i].name;
        this.img = this.products[i].img;
        this.price = this.products[i].price;
        return;
      }
    }
  }

  submitEdit(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products[i] = new Product(this.name, this.price, this.img, true);
        this.name = '';
        this.img = '';
        this.price = 0;
        return;
      }
    }
  }
}
