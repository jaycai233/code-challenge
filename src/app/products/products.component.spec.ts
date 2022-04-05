import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from './../service/api.service';
import { CommonService } from './../service/common.service';
import { of, from } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ],
      declarations: [ProductsComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getData from service after init', () => {
    const service = fixture.debugElement.injector.get(ApiService);

    const spy = spyOn(service, 'getDataList').and.returnValue(
      of({
        data: [
          {
            id: '9',
            name: 'product9',
            price: 2.99,
            type: 'food',
            active: true
          }
        ],
        totalLength: 3
      })
    );
    component.ngOnInit();
    expect(component.dataSource.data).toEqual([
      {
        id: '9',
        name: 'product9',
        price: 2.99,
        type: 'food',
        active: true
      }
    ]);
  });

  it('should call getData after pageChanged', () => {
    const spy = spyOn(component, 'getData');
    component.ngOnInit();
    component.paginator.nextPage();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should pop up confirm before delete', () => {
    let commonService = fixture.debugElement.injector.get(CommonService);

    const spyConfirm = spyOn(commonService, 'openConfirmDialog');
    component.deleteConfirm({
      id: '2',
      name: 'test',
      price: 1,
      type: 'books',
      active: true
    });
    expect(commonService.openConfirmDialog).toHaveBeenCalled();
  });

  it('should delete after confirm', () => {
    let apiService = fixture.debugElement.injector.get(ApiService);
    const spyDelete = spyOn(apiService, 'deleteData').and.returnValue(
      of({ status: 200 })
    );
    component.delete('2');
    expect(apiService.deleteData).toHaveBeenCalled();
  });
});
