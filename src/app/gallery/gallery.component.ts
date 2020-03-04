import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

import { NgxPopperComponent } from '../ngx-popper/ngx-popper.component';

// Import Swiper and modules
import { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';
// import {Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {

  @Input('slides')
  slides: Array<string> = [];

  swiperInstance: Swiper;
  swiperOptions: SwiperOptions = {
    pagination: {},
    navigation: {},
    scrollbar: {}
  };

  galleryElem: HTMLElement;

  @ViewChild('galleryRef', null)
  galleryRef: ElementRef;

  @ViewChild('popRef', null)
  popRef: NgxPopperComponent;

  constructor() { }

  ngAfterViewInit() {

    this.swiperOptions = {

      observer: true,
      observeParents: true,

      // prevents slide to zoom-in when clicking the navigation arrows
      touchEventsTarget: 'wrapper',

      // loop: false,

      // pagination: {
      //   el: '.swiper-pagination',
      //   // type: 'bullets',
      //   clickable: true,
      // },

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

    this.swiperInstance = new Swiper('.swiper-container', this.swiperOptions);
    this.swiperInstance.zoom.disable();
  }

  openPopper(e: Event) {

    this.stopPropagation(e);

    if (!this.popRef.isOpen) {

      this.popRef.open();

      // enables zooming
      this.swiperInstance.zoom.enable();
    }
  }

  closePopper(e: Event) {
    if (this.popRef.isOpen) {
      this.popRef.close();

      // disables zooming
      this.swiperInstance.zoom.out();
      this.swiperInstance.zoom.disable();
    }
  }

  stopPropagation(e: Event) {
    return e.stopPropagation();
  }
}
