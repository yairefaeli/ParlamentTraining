import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from 'src/app/core/core.module';
import { LoginScreenModule } from './features/login-screen/login-screen.module';
import { EffectsModule } from '@ngrx/effects';
import { LobbyModule } from './features/lobby/lobby.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    CoreModule,
    LoginScreenModule,
    LobbyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
