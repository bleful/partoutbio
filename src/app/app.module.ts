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
import { ImpressumComponent } from './impressum/impressum.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ContentfulService } from './service/contentful.service';

const routes: Routes = [
  { path: '**', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingsoonComponent,
    MainGalleryComponent,
    ShowCaseGalleryComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    RouterModule.forRoot(routes),
    LottieAnimationViewModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBeLVLlxfR-au2mJF-3kemjXf4P2BGxgIo'
    })
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
