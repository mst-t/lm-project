import 'zone.js/dist/zone';
import 'reflect-metadata';

import 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = {
  "city": require('./app/assets/images/city.jpg'),
  "cp"  : require('./app/assets/images/cp.jpg'),
  "dummy": require('./app/assets/images/dummy.jpg')
};

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from './app/browser-app.module';

export function main() {
  return platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}

document.addEventListener('DOMContentLoaded', main, false);
