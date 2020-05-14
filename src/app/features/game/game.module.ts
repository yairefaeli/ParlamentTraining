import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects';
import { GameComponent } from './container/game.component';
import { AngularCesiumModule } from 'angular-cesium';

const routes: Routes = [
    {
        path: 'game', component: GameComponent
    }
];

@NgModule({
    declarations: [
        GameComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([]),
        AngularCesiumModule.forRoot()
    ]
})
export class GameModule { }
