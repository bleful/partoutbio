import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingsoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
