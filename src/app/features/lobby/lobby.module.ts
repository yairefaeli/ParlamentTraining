import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LobbyComponent } from './container/lobby.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: 'lobby', component: LobbyComponent
  }
];

@NgModule({
  declarations: [
    LobbyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([]),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
    
  ],
  exports: [
    LobbyComponent
  ]
})
export class LobbyModule { }
