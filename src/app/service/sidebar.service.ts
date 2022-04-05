import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public toggleNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public toggle(): void {
    this.toggleNav.next(!this.toggleNav.value);
  }
}
