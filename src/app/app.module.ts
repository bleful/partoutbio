import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { ShowCaseGalleryComponent } from './show-case-gallery/show-case-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingsoonComponent,
    MainGalleryComponent,
    ShowCaseGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
