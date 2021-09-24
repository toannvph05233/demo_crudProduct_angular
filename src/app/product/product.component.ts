import {
  Component, EventEmitter,
  Input,
  OnInit,
  Output,

} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productFormGroup: FormGroup


  @Input()
  products: Product[] = [];

  @Output() deleteProductEmit = new EventEmitter<string>();
  @Output() createProductEmit = new EventEmitter<Product>();
  @Output() editProductEmit = new EventEmitter<Product>();


  constructor() {
  }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      status: new FormControl(true),
    })
  }

  deleteProduct(name) {
    this.deleteProductEmit.emit(name);
  }

  createProduct() {
    this.createProductEmit.emit(this.productFormGroup.value);
    this.productFormGroup.reset();
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

  submitEdit() {
    this.editProductEmit.emit(this.productFormGroup.value);
    this.productFormGroup.reset();
  }
}
