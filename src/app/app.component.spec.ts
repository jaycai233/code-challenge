import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SidebarService } from './service/sidebar.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavigationComponent, SideMenuComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render navigation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navigation-bar')).not.toBe(null);
  });

  it('sidebar should be close', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-nav-list.mat-list-base.side-menu')
    ).toBe(null);
  });

  it('should show sidemenu after toggle', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const service = fixture.debugElement.injector.get(SidebarService);
    service.toggle();

    expect(app.getSideBarValue()).toEqual(true);
  });
});
