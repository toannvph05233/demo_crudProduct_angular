import {
  Component, EventEmitter,
  Input,
  OnInit,
  Output,

} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productFormGroup: FormGroup
  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getProducts();
    this.productFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      status: new FormControl(true),
    })
  }

  getProducts() {
    this.http.get<Product[]>('http://localhost:8080/api/products').subscribe((data) => {
      this.products = data;
    })
  }

  deleteProduct(id) {
    this.http.delete(`http://localhost:8080/api/products/${id}`).subscribe((data) => {
      alert("xóa thành công");
      this.getProducts();
    })
  }


}
