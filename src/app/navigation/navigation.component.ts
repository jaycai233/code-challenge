import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../service/sidebar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  toggleActive = false;

  constructor(private sidenav: SidebarService) {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }
}
