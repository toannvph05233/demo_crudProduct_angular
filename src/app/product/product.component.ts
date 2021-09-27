import {
  Component, EventEmitter,
  Input,
  OnInit,
  Output,

} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productFormGroup: FormGroup

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = productService.products;
  }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      status: new FormControl(true),
    })
  }


  showEdit(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.productFormGroup.get('name').setValue(this.products[i].name);
        this.productFormGroup.get('img').setValue(this.products[i].img);
        this.productFormGroup.get('price').setValue(this.products[i].price);
        return;
      }
    }
  }

  createProduct() {
    this.productService.createProduct(this.productFormGroup.value);
    this.productFormGroup.reset();
    this.productFormGroup.get('status').setValue(true);
  }


  submitEdit() {
    this.productService.editProduct(this.productFormGroup.value);
    this.productFormGroup.reset();
    this.productFormGroup.get('status').setValue(true);

  }
  deleteProduct(name){
    this.productService.deleteProduct(name);
  }

}
