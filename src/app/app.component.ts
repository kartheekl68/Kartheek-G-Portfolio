import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skywalker';
  showHead = false;
  constructor(router: Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/home' || event['url'] == '/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
