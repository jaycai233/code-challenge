import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExistProducts, Products } from '../model/product.model';
import { ApiService } from './../service/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ExistProducts | Products;
  productId: string | null;
  productForm: FormGroup;
  activeList = [{ value: false }, { value: true }];
  typeList = [
    { value: 'books' },
    { value: 'electronics' },
    { value: 'food' },
    { value: 'furniture' },
    { value: 'toys' }
  ];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.apiService.getDataById(this.productId).subscribe(res => {
        if (res.length) {
          this.product = res[0];
          this.productForm.patchValue(res[0]);
          console.log(res[0]);
        }
      });
    }
  }

  createForm(): void {
    this.productForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0.009)]],
      type: [null, [Validators.required]],
      active: [null, [Validators.required]]
    });
  }

  submit(formValue: any): void {
    console.log(this.productForm.valid);
    const updatedProduct: Products = {
      name: formValue.name,
      price: formValue.price.toFixed(2),
      type: formValue.type,
      active: formValue.active
    };
    if (this.productId) {
      this.apiService.updateData(this.productId, updatedProduct).subscribe(
        res => {
          this.commonService.openSnackBar('update successfully');
          this.router.navigate(['/']);
        },
        error => {
          this.commonService.openSnackBar(error);
        }
      );
    } else {
      this.apiService.addNewData(updatedProduct).subscribe(
        res => {
          this.commonService.openSnackBar('add successfully');
          this.router.navigate(['/']);
        },
        error => {
          this.commonService.openSnackBar(error);
        }
      );
    }
  }
}
