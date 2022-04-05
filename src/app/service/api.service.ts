import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { Products, ExistProducts, ApiResponse } from './../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: ExistProducts[] = [
    {
      id: '1',
      name: 'product1',
      price: 20,
      type: 'books',
      active: true
    },
    {
      id: '2',
      name: 'product2',
      price: 120.5,
      type: 'electronics',
      active: true
    },
    {
      id: '3',
      name: 'product3',
      price: 210,
      type: 'food',
      active: true
    },
    {
      id: '4',
      name: 'product4',
      price: 2.99,
      type: 'furniture',
      active: true
    },
    {
      id: '5',
      name: 'product5',
      price: 12,
      type: 'toys',
      active: true
    },
    {
      id: '6',
      name: 'product6',
      price: 20,
      type: 'toys',
      active: true
    },
    {
      id: '7',
      name: 'product7',
      price: 120.5,
      type: 'books',
      active: true
    },
    {
      id: '8',
      name: 'product8',
      price: 210,
      type: 'furniture',
      active: true
    },
    {
      id: '9',
      name: 'product9',
      price: 2.99,
      type: 'food',
      active: true
    },
    {
      id: '10',
      name: 'product10',
      price: 12,
      type: 'food',
      active: true
    }
  ];
  constructor() {}

  getDataList(
    pageNo: number = 0,
    perPage: number = 5
  ): Observable<ApiResponse> {
    let filterData: ExistProducts[];
    const index = pageNo === 0 ? 0 : pageNo * perPage;
    filterData = this.data.slice(index, index + perPage);
    return of({ data: filterData, totalLength: this.data.length }).pipe(
      delay(500)
    );
  }

  getDataById(id: string): Observable<ExistProducts[]> {
    const data = this.data.filter(res => res.id === id);
    return of(data);
  }

  updateData(
    productId: string,
    body: Products
  ): Observable<{ status: number }> {
    this.data = this.data.map(res => {
      if (res.id === productId) {
        const newData = { id: productId, ...body };
        res = newData;
      }
      return res;
    });
    return of({ status: 200 });
  }

  addNewData(body: Products): Observable<{ status: number }> {
    const product = { id: this.data.length + '', ...body };
    this.data.push(product);
    return of({ status: 200 });
  }

  deleteData(id: string): Observable<{ status: number }> {
    this.data = this.data.filter(res => res.id !== id);
    return of({ status: 200 });
  }
}
