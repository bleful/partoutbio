import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;

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
