/*
 * @Author: Jeffery
 * @Date: 2019-10-11 09:17:21
 * @LastEditors: Jeffery
 * @LastEditTime: 2019-10-11 15:26:56
 * @Description:
 * @email: 286630433@qq.com
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as GC from '@grapecity/spread-sheets';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.dev';
GC.Spread.Sheets.LicenseKey = ''; // 正式环境需要购买
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
