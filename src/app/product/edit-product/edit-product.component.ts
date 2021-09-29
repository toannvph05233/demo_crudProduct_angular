import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  id: string;

  constructor(private producService: ProductService, private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      img: new FormControl(),
      price: new FormControl(),
      status: new FormControl(true),
    })
    this.activeRoute.params.subscribe((data) => this.id = data.name);
    this.showEditProduct(this.id);
  }

  saveProduct() {
    this.http.post<Product>('http://localhost:8080/api/products', this.productForm.value).subscribe((data) => {
      alert("create thành công - " + data.name)
      this.router.navigate(["/product"])
    })
  }

  showEditProduct(id) {
    this.http.get<Product>(`http://localhost:8080/api/products/${id}`).subscribe((data) => {
      this.productForm.get('id').setValue(data.id);
      this.productForm.get('name').setValue(data.name);
      this.productForm.get('img').setValue(data.img);
      this.productForm.get('price').setValue(data.price);
      this.productForm.get('status').setValue(data.status);
    })
  }

}

