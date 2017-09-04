import 'zone.js/dist/zone';
import 'reflect-metadata';

import 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const myStyle = require('./style.css');
const images = {
  "city": require('./app/assets/images/city.jpg'),
  "cp"  : require('./app/assets/images/cp.jpg'),
  "dummy1": require('./app/assets/images/dummy1.jpg'),
  "dummy2": require('./app/assets/images/dummy2.jpg'),
  "dummy3": require('./app/assets/images/dummy3.jpg'),
  "dummy4": require('./app/assets/images/dummy4.jpg'),
  "dummy5": require('./app/assets/images/dummy5.jpg')
};

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from './app/browser-app.module';

export function main() {
  return platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}

document.addEventListener('DOMContentLoaded', main, false);
