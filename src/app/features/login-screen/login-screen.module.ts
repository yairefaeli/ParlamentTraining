import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LoginScreenComponent } from './container/login-screen.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginScreenEffects } from './effects/login-screen.effects';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: 'login', component: LoginScreenComponent
  }
];

@NgModule({
  declarations: [
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([LoginScreenEffects]),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    
  ],
  exports: [
    LoginScreenComponent
  ]
})
export class LoginScreenModule { }
