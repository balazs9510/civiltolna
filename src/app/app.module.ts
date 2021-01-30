import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HirekComponent } from './components/hirek/hirek.component';
import { FooterComponent } from './components/footer/footer.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BelepesComponent } from './components/private/belepes/belepes.component';
import { FormsModule } from '@angular/forms';
import { config } from 'process';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbgmZCx-pSyf6dTY0Y4mrzDHq65-34Cp0",
  authDomain: "dupi-prod.firebaseapp.com",
  databaseURL: "https://dupi-prod.firebaseio.com",
  projectId: "dupi-prod",
  storageBucket: "dupi-prod.appspot.com",
  messagingSenderId: "91017376483",
  appId: "1:91017376483:web:6f4c82ea3cdaf9af3d0bd6",
  measurementId: "G-Z95V207Y7M"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HirekComponent,
    FooterComponent,
    KapcsolatComponent,
    BelepesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    //AngularFireStorageModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
