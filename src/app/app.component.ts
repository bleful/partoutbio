import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'partoutbio';
  lastnumber: any;

  constructor() {
    this.lastnumber = 0;
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');

    // console.log(element.);

    if (this.lastnumber < window.pageYOffset) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }

    this.lastnumber = window.pageYOffset;
  }
}
