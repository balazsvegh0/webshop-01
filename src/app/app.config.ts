import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"webshop-61ea0","appId":"1:88329526774:web:0cb4a01f6bec82f38a7bd7","databaseURL":"https://webshop-61ea0-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"webshop-61ea0.appspot.com","apiKey":"AIzaSyDBs250_7SPK2_ZwZ_VmlsRf43Bl3Y7PCk","authDomain":"webshop-61ea0.firebaseapp.com","messagingSenderId":"88329526774"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
