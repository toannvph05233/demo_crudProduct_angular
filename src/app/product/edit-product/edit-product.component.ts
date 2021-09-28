import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  name: string;

  constructor(private producService: ProductService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      price: new FormControl(),
      status: new FormControl(true),
    })
    this.activeRoute.params.subscribe((data) => this.name = data.name);
    this.showEditProduct();
  }


  saveProduct() {
    this.producService.editProduct(this.productForm.value);
    this.router.navigate(['/product'])
  }

  showEditProduct() {
    let p = this.producService.showEdit(this.name);
    this.productForm.get('name').setValue(p.name);
    this.productForm.get('img').setValue(p.img);
    this.productForm.get('price').setValue(p.price);
    this.productForm.get('status').setValue(p.status);
  }

}

