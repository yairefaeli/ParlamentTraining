var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayerName } from 'src/app/core/reducers/core.reducer';
import { getLobbyPlayers, getPlayerStatus, getTimer } from '../reducer/lobby.reducer';
import { UpdatePlayerStatus, SubscribeToPlayerUpdates, SubscribeToTimer } from '../lobby.actions';
var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(store) {
        var _this = this;
        this.store = store;
        this.playerName$ = this.store.select(getPlayerName);
        this.playerStatus$ = this.store.select(getPlayerStatus);
        this.lobyPlayers$ = this.store.select(getLobbyPlayers);
        this.timer$ = this.store.select(getTimer);
        this.playerName$.subscribe(function (playerName) {
            _this.store.dispatch(new SubscribeToPlayerUpdates(playerName));
        });
        this.store.dispatch(new SubscribeToTimer());
    }
    LobbyComponent.prototype.ngOnInit = function () {
    };
    LobbyComponent.prototype.executeReady = function () {
        var _this = this;
        this.playerName$.subscribe(function (nameValue) {
            _this.store.dispatch(new UpdatePlayerStatus({ status: "READY", name: nameValue }));
        });
        // combineLatest(
        //   this.playerName$,
        //   this.playerStatus$
        // ).pipe(
        //   map(([nameValue, statusValue]) => {
        //     return { status: statusValue, name: nameValue }
        //   })
        // ).subscribe(({ status: statusValue, name: nameValue }) =>
        //   this.store.dispatch(new UpdatePlayerStatus({ status: "READY", name: nameValue }))
        // )
    };
    LobbyComponent = __decorate([
        Component({
            selector: 'app-lobby',
            templateUrl: './lobby.component.html',
            styleUrls: ['./lobby.component.less']
        }),
        __metadata("design:paramtypes", [Store])
    ], LobbyComponent);
    return LobbyComponent;
}());
export { LobbyComponent };
//# sourceMappingURL=lobby.component.js.map