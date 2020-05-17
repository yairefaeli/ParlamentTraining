var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LobbyComponent } from './container/lobby.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { lobbyStateToken, LobbyReducer } from './reducer/lobby.reducer';
import { LobbyEffects } from './effects/lobby.effects';
var routes = [
    {
        path: 'lobby', component: LobbyComponent
    }
];
var LobbyModule = /** @class */ (function () {
    function LobbyModule() {
    }
    LobbyModule = __decorate([
        NgModule({
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
    ], LobbyModule);
    return LobbyModule;
}());
export { LobbyModule };
//# sourceMappingURL=lobby.module.js.map