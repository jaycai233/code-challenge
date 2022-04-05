import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwRetail';

  constructor(public sidenavService: SidebarService) {}

  getSideBarValue(): boolean {
    return this.sidenavService.toggleNav.value;
  }
}
