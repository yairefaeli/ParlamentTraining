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
import { ExecuteLogin } from '../login-screen.actions';
import { FetchLobbyPlayers } from '../../lobby/lobby.actions';
var LoginScreenComponent = /** @class */ (function () {
    function LoginScreenComponent(store) {
        this.store = store;
    }
    LoginScreenComponent.prototype.ngOnInit = function () {
    };
    LoginScreenComponent.prototype.executeLogin = function () {
        this.store.dispatch(new ExecuteLogin(this.playerName));
        this.store.dispatch(new FetchLobbyPlayers());
    };
    LoginScreenComponent.prototype.onKey = function (event) {
        this.playerName = event.target.value;
    };
    LoginScreenComponent = __decorate([
        Component({
            selector: 'app-login-screen',
            templateUrl: './login-screen.component.html',
            styleUrls: ['./login-screen.component.less']
        }),
        __metadata("design:paramtypes", [Store])
    ], LoginScreenComponent);
    return LoginScreenComponent;
}());
export { LoginScreenComponent };
//# sourceMappingURL=login-screen.component.js.map