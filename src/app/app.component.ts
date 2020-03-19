import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'partoutbio';
  lastnumber: any;

  hidden = true;

  constructor(private router: Router) {
    this.lastnumber = window.pageYOffset;
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');

    if (this.lastnumber < window.pageYOffset) {
      element.classList.add('navbar-inverse');
      element.classList.remove('navbar-outverse');
    } else {
      element.classList.add('navbar-outverse');
      element.classList.remove('navbar-inverse');
    }

    if (window.pageYOffset === 0) {
      element.classList.add('navbar-transparent');
      element.classList.remove('navbar-outverse');
    } else {
      element.classList.remove('navbar-transparent');
    }

    this.lastnumber = window.pageYOffset;
  }

  toggle() {
   // this.hidden = !this.hidden;
    this.router.navigate(['/impressum']);
  }
}
