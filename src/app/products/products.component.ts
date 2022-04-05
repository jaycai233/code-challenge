import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiResponse, ExistProducts } from './../model/product.model';
import { ApiService } from './../service/api.service';
import { CommonService } from './../service/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'type', 'active', 'action'];
  dataSource = new MatTableDataSource();
  isLoading = true;
  isDataReady = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private apiService: ApiService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  pageChanged(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.isLoading = true;
    this.getData();
  }

  getData(): void {
    this.apiService
      .getDataList(this.currentPage, this.pageSize)
      .subscribe((res: ApiResponse) => {
        this.dataSource.data = res.data;
        this.dataSource.sort = this.sort;
        this.totalRows = res.totalLength;
        this.isLoading = false;
        this.isDataReady = true;
      });
  }

  async deleteConfirm(product: ExistProducts): Promise<void> {
    const message = `Do you really want to delete ${product.name} `;
    const confirm = await this.commonService.openConfirmDialog(message);
    if (confirm) {
      this.delete(product.id);
    }
  }

  delete(id: string): void {
    this.apiService.deleteData(id).subscribe(
      res => {
        this.dataSource.data = this.dataSource.data.filter((data: any) => {
          return data.id !== id;
        });
        this.commonService.openSnackBar('Delete successfully');
      },
      error => {
        this.commonService.openSnackBar('something wrong, status:' + error);
      }
    );
  }
}
