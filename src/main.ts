 /*
 *@Description:
 *@Author:Jeffery
 *@Date:2020/12/25
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  // .bootstrapModule(AppModule)
  .catch(err => console.error(err));
