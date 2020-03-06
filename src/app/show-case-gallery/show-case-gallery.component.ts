import { Component, OnInit } from '@angular/core';
import { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';

@Component({
  selector: 'app-show-case-gallery',
  templateUrl: './show-case-gallery.component.html',
  styleUrls: ['./show-case-gallery.component.scss']
})
export class ShowCaseGalleryComponent implements OnInit {


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

  constructor() { }

  ngOnInit() {
  }

}
