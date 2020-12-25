/*
* @Description:根模块
* @Author: Jeffery
* @Date: 2020/12/25
*/
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
