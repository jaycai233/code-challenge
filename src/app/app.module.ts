import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideMenuComponent,
    ProductsComponent,
    ProductDetailComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
