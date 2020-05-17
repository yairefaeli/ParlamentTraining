var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from "rxjs";
import { loginScreenActionsTypes, LoginSuccess } from "../login-screen.actions";
import { map, switchMap, tap } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service';
import { login } from 'src/app/graphql/mutations/login.gql';
import { Router } from "@angular/router";
var LoginScreenEffects = /** @class */ (function () {
    function LoginScreenEffects(actions$, router, apolloLinkProvider) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.apolloLinkProvider = apolloLinkProvider;
        this.executeLogin$ = this.actions$.pipe(ofType(loginScreenActionsTypes.EXECUTE_LOGIN), switchMap(function (action) {
            console.log("player name: " + action.playerName);
            return _this.apolloLinkProvider.execute$({
                query: login,
                variables: {
                    playerName: action.playerName,
                },
            });
        }), map(function (result) {
            console.log("recieved token: " + result.data.login);
            return new LoginSuccess(result.data.login);
        }));
        this.loginSuccess$ = this.actions$.pipe(ofType(loginScreenActionsTypes.LOGIN_SUCCESS), tap(function () {
            _this.router.navigate(['/lobby']);
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LoginScreenEffects.prototype, "executeLogin$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], LoginScreenEffects.prototype, "loginSuccess$", void 0);
    LoginScreenEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            Router,
            ApolloLinkProviderService])
    ], LoginScreenEffects);
    return LoginScreenEffects;
}());
export { LoginScreenEffects };
//# sourceMappingURL=login-screen.effects.js.map