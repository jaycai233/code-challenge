import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';
import { AppComponent } from './../app.component';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    service = TestBed.inject(SidebarService);
  });

  it('should change toggleNav value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    service.toggle();
    expect(app.getSideBarValue()).toEqual(true);
  });
});
