import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarCollapsed: boolean;
  @Input()
  candidateName = 'Elisha Amos'; //Name added

  constructor() {
    this.navbarCollapsed = true;
  }

  collapseNavbar() {
    this.navbarCollapsed = true;
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed
  }
}
