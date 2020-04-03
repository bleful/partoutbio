import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Parallax from 'parallax-js';
import { google } from "google-maps";

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('gmap', null) gmapElement: any;
  map: google.maps.Map;

  public lottieConfig: Object;
  private anim: any;

  texto: string = 'Partout Bio';
  lat: number = 51.3130073;
  lng: number = 9.4648409;
  zoom: number = 17;

  constructor() {
    this.lottieConfig = {
      path: 'assets/fire.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
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
    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  handleAnimation(anim: any) {
    this.anim = anim;
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
