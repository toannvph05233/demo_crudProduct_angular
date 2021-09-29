import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private producService: ProductService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      price: new FormControl(),
      status: new FormControl(true),
    })
  }

  createProduct() {
    this.http.post<Product>('http://localhost:8080/api/products', this.productForm.value).subscribe((data) => {
      alert("create thành công - " + data.name)
      this.router.navigate(["/product"])
    })

  }

}
