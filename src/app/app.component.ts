import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fintech-admin';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBf-7qTha3d_h0OZzbC7r7f1GZYl-NoEzI',
      authDomain: 'fintex-93c12.firebaseapp.com',
      projectId: 'fintex-93c12',
      storageBucket: 'fintex-93c12.appspot.com',
      messagingSenderId: '1054945101587',
      appId: '1:1054945101587:web:2611b0df40644a74c9bce6',
      measurementId: 'G-W7558Q5G2M'
    };

    const app = initializeApp(firebaseConfig);
  }
}
