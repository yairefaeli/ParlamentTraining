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
import { StoreModule } from '@ngrx/store';
import { lobbyStateToken, LobbyReducer } from './reducer/lobby.reducer';
import { LobbyEffects } from './effects/lobby.effects';

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
    EffectsModule.forFeature([LobbyEffects]),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    StoreModule.forFeature(lobbyStateToken, LobbyReducer),

  ],
  exports: [
    LobbyComponent
  ]
})
export class LobbyModule { }
