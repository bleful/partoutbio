import { Component, OnInit } from '@angular/core';
import { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  swiperInstance: Swiper;
  swiperOptions: SwiperOptions = {
    pagination: {},
    navigation: {},
    scrollbar: {}
  };

 config: any = {
    observer: true,
    observeParents: true,

    // prevents slide to zoom-in when clicking the navigation arrows
    touchEventsTarget: 'wrapper',

    loop: true,

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
      disableOnInteraction: false,
    },

    zoom: {
      toggle: true
    },
};

  constructor() { }

  ngOnInit() {
  }

}
