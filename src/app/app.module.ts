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
import { EgyesuletComponent } from './components/egyesulet/egyesulet.component';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { HirekKezeleseComponent } from './components/private/hirek-kezelese/hirek-kezelese.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const firebaseConfig = {
  apiKey: "AIzaSyCCGpgfwtVrpv64KMzwhyts4IN5IW-M8u8",
  authDomain: "civiltolna.firebaseapp.com",
  databaseURL: "https://civiltolna-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "civiltolna",
  storageBucket: "civiltolna.appspot.com",
  messagingSenderId: "818681267388",
  appId: "1:818681267388:web:3c8ef9f7561861891abcb9"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HirekComponent,
    FooterComponent,
    KapcsolatComponent,
    BelepesComponent,
    EgyesuletComponent,
    HirekKezeleseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule.enablePersistence({synchronizeTabs: true}), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    //AngularFireStorageModule,
    FormsModule,
    CKEditorModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
