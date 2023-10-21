import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  showMenu: boolean = false;

  showNavMenu() {
    this.showMenu = true;
  }

  closeNavMenu() {
    this.showMenu = false;
  }
}
