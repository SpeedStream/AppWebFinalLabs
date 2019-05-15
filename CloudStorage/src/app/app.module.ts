import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Agrega estos módulos
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
//Formularios
import { ReactiveFormsModule } from '@angular/forms';
//Servicio
import { FirebaseStorageService } from './firebase-storage.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    FirebaseStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
