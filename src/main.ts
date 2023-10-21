import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


import * as firebase from 'firebase/app';

import { AppModule } from './app/app.module';
import { environments } from './environments/environments';

if (environments.production) {
  enableProdMode();
}

// Initialize Firebase


const firebaseConfig = environments.firebaseConfig;
const app = firebase.initializeApp(firebaseConfig);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
