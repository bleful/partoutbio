import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxPopperComponent } from './ngx-popper/ngx-popper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingsoonComponent,
    GalleryComponent,
    NgxPopperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
