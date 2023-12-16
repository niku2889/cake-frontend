import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cherans-frontend';
  topPipingColor: any;
  bottomPipingColor: any;
  mainIcingColor: any;

  changeMainColor(e: any) {
    this.mainIcingColor = e;
  }

  changeTopColor(e: any) {
    this.topPipingColor = e;
  }

  changeBottomColor(e: any) {
    this.bottomPipingColor = e;
  }
}
