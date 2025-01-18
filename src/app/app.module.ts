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
import { AngularFireStorageModule } from '@angular/fire/storage';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HasznosInformaciokComponent } from './components/hasznos-informaciok/hasznos-informaciok.component';
import { FajlFeltoltesComponent } from './components/private/fajl-feltoltes/fajl-feltoltes.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { CivilkozpontComponent } from './components/civilkozpont/civilkozpont.component';
import { CivilAdatbazisComponent } from './components/civil-adatbazis/civil-adatbazis.component';
import { CookieLawModule } from 'angular2-cookie-law';
import { UserAgreementComponent } from './components/user-agreement/user-agreement.component';
import { HirlevelekComponent } from './components/hirlevelek/hirlevelek.component';
import { PageTemplateEditorComponent } from './components/private/page-template-editor/page-template-editor.component';
import { PageTemplateHandlingComponent } from './components/private/page-template-handling/page-template-handling.component';
import { OkosfuzetComponent } from './components/okosfuzet/okosfuzet.component';
import { ProgramokComponent } from './components/programok/programok.component';
import { SzervezetBetoltesComponent } from './components/private/szervezet-betoltes/szervezet-betoltes.component';
import { KeresoComponent } from './components/civil-adatbazis/kereso/kereso.component';
import { MintaSzabalyzatokComponent } from './components/minta-szabalyzatok/minta-szabalyzatok.component';
import { PalyazatokComponent } from './components/palyazatok/palyazatok.component';
import { CivilReferensekComponent } from './components/civil-referensek/civil-referensek.component';
import { JotekonysagiProgramokComponent } from './components/jotekonysagi-programok/jprogramok.component';


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
    HirekKezeleseComponent,
    TimestampToDatePipe,
    HasznosInformaciokComponent,
    FajlFeltoltesComponent,
    SanitizePipe,
    CivilkozpontComponent,
    CivilAdatbazisComponent,
    UserAgreementComponent,
    HirlevelekComponent,
    PageTemplateEditorComponent,
    PageTemplateHandlingComponent,
    OkosfuzetComponent,
    ProgramokComponent,
    SzervezetBetoltesComponent,
    KeresoComponent,
    MintaSzabalyzatokComponent,
    PalyazatokComponent,
    CivilReferensekComponent,
    JotekonysagiProgramokComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule.enablePersistence({synchronizeTabs: true}), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FormsModule,
    CKEditorModule,
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CookieLawModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
