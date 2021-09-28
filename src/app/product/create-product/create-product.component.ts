import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private producService: ProductService, private router: Router) {
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
    this.router.navigate(['/product'])
  }

}
