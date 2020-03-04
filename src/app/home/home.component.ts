import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'https://via.placeholder.com/800x450/FF5733/ffffff',
    'https://via.placeholder.com/800x450/C70039/ffffff',
    'https://via.placeholder.com/800x450/900C3F/ffffff'
  ];

  constructor() { }

  ngOnInit() {
  }

}
