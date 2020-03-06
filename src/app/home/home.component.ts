import { Component, OnInit } from '@angular/core';
import { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;

  swiperInstance: Swiper;
  swiperOptions: SwiperOptions = {
    navigation: {}
  };

  configMain: any = {
    observer: true,
    observeParents: true,

    // prevents slide to zoom-in when clicking the navigation arrows
    touchEventsTarget: 'wrapper',
    loop: true,
    speed: 1000,

    // pagination: {
    //   el: '.swiper-pagination',
    //   // type: 'bullets',
    //   clickable: true,
    // },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    paginationClickable: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

    zoom: {
      toggle: true
    },
  };

  configSelect: any = {
    observer: true,
    observeParents: true,

    // prevents slide to zoom-in when clicking the navigation arrows
    touchEventsTarget: 'wrapper',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // pagination: {
    //   el: '.swiper-pagination',
    //   // type: 'bullets',
    //   clickable: true,
    // },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    paginationClickable: true,

  };

  constructor() {
    this.lottieConfig = {
      path: 'assets/fire.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
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
