import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      declarations: [ProductDetailComponent],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
