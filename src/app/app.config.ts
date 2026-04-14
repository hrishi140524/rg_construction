import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

// 🔥 Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';

// 🔑 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdCyT5lyI9yfMaTiPVxiR2bbe_8c1xk0Q",
  authDomain: "rgconstruction-cae27.firebaseapp.com",
  projectId: "rgconstruction-cae27",
  storageBucket: "rgconstruction-cae27.appspot.com", // ✅ corrected
  messagingSenderId: "379548768950",
  appId: "1:379548768950:web:ec1bf07d16a5f4a4f26417",
  measurementId: "G-RDW5GWJ3GP"
};

export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),

    // 🔥 ADD THESE LINES (Firebase)
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())

  ]
};