import { Component, OnInit, HostListener, AfterContentInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Parallax from 'parallax-js';

declare var Parallax: any;

class Ware {
  titel: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterContentInit, OnInit {

  public lottieConfig: Object;
  private anim: any;

  products: any = [
    {
      "name": "Backwaren",
      "subtitel": [
        {
          "name": "Bio Backwaren/Bio Kuchen",
          "inhalt": [
            {
              "name": "Sämtliche Backwaren",
              "beschreibung": "(Brote, Brötchen, etc.) beziehen wir von Gut Kragenhof"
            }
          ]
        },
        {
          "name": "Backzutaten/Zucker",
          "inhalt": [
            {
              "name": "Bio Backpulver",
              "beschreibung": ""
            }
          ]
        }
      ]
    }
  ];

  category = 0;
  subCategory = 0;

  texto: string = 'Partout Bio';
  lat: number = 51.3130073;
  lng: number = 9.4648409;
  zoom: number = 17;

  constructor(private httpClient: HttpClient) {
    this.lottieConfig = {
      path: 'assets/fire.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

    this.httpClient.get('./assets/json/Sortiment.json').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  ngAfterContentInit() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });

    parallaxInstance.limit(60, 60);
    parallaxInstance.origin(.1, .1);
    // parallaxInstance.invert(false, false);
  }

  ngOnInit() {
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  navToGoogleMaps() {
    window.location.href = 'https://goo.gl/maps/EofrR9TK9AvvEc3T8';
  }

  getCategoryIndex(value) {
    this.category = value;
    this.subCategory = 0;
  }

  getSubCategoryIndex(value) {
    this.subCategory = value;
  }
  /*

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

  */

}
