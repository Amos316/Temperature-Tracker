import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {
  @ViewChild('tabs') tabs;
  currentTab: string;
  urlParts: Array<string>;
  constructor(private router: Router) {
    this.urlParts = this.router.url.split('/');
    this.currentTab = this.urlParts[this.urlParts.length - 1];
  }

  goToTab($event: any, tab: string) {
    if ($event) {
      $event.preventDefault();
    }
    this.tabs.select(tab);
  }

  goToURL($event) {
    this.router.navigate(['/guide/' + $event.nextId]);
  }
}
