import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private producService: ProductService) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      price: new FormControl(),
      status: new FormControl(true),
    })
  }

  saveProduct() {
    this.producService.createProduct(this.productForm.value);
  }

}

