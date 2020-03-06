import { Component, OnInit } from '@angular/core';
import { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.scss']
})
export class MainGalleryComponent implements OnInit {


  swiperInstance: Swiper;
  swiperOptions: SwiperOptions = {
    navigation: {}
  };

  config: any = {
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


  constructor() { }

  ngOnInit() {
  }

}
