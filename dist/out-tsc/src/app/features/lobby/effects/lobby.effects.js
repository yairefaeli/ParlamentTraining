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
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service';
import { updatePlayerStatus } from 'src/app/graphql/mutations/update-player-status.gql';
import { fetchLobbyPlayers } from 'src/app/graphql/query/fetch-lobby-players.gql';
import { subscribeToPlayerUpdates } from 'src/app/graphql/subscriptions/subscribe-to-player-updates.gql';
import { subscribeToTimer } from 'src/app/graphql/subscriptions/subscribe-to-timer.qgl';
import { lobbyActionsTypes, FetchLobbyPlayersSuccess, UpdatePlayerStatusSuccess, PlayerUpdated, TimerOn } from "../lobby.actions";
import { getPlayerName } from "src/app/core/reducers/core.reducer";
import { Router } from "@angular/router";
var LobbyEffects = /** @class */ (function () {
    function LobbyEffects(actions$, store, apolloLinkProvider, router) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.apolloLinkProvider = apolloLinkProvider;
        this.router = router;
        this.fetchLobbyPlayers$ = this.actions$.pipe(ofType(lobbyActionsTypes.FETCH_LOBBY_PLAYERS), switchMap(function (action) {
            return _this.apolloLinkProvider.execute$({
                query: fetchLobbyPlayers
            });
        }), withLatestFrom(this.store.select(getPlayerName)), map(function (_a) {
            var result = _a[0], playerName = _a[1];
            var players = result.data.getPlayers;
            return new FetchLobbyPlayersSuccess(players.filter(function (player) { return player.name != playerName; }));
        }));
        this.updatePlayerStatus$ = this.actions$.pipe(ofType(lobbyActionsTypes.UPDATE_PLAYER_STATUS), switchMap(function (action) {
            return _this.apolloLinkProvider.execute$({
                query: updatePlayerStatus,
                variables: {
                    token: action.player.name,
                    status: action.player.status
                }
            });
        }), map(function (result) {
            return new UpdatePlayerStatusSuccess(result.data.updatePlayerStatus.player.status);
        }));
        this.subscribeToPlayerUpdates$ = this.actions$.pipe(ofType(lobbyActionsTypes.SUBSCRIBING_PLAYER_UPDATES), switchMap(function (action) {
            return _this.apolloLinkProvider.execute$({
                query: subscribeToPlayerUpdates,
                variables: {
                    loginToken: action.playerToken
                }
            });
        }), map(function (result) {
            return new PlayerUpdated(result.data.playerStatusChanged.name, result.data.playerStatusChanged.status);
        }));
        this.subscribeToTimer$ = this.actions$.pipe(ofType(lobbyActionsTypes.SUBSCRIBING_TO_TIMER), switchMap(function (action) {
            return _this.apolloLinkProvider.execute$({
                query: subscribeToTimer,
                variables: {
                    playerToken: ""
                }
            });
        }), map(function (result) {
            if (result.data.subscribeToTimer == "5") {
                _this.router.navigate(['/game']);
            }
            return new TimerOn(result.data.subscribeToTimer);
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LobbyEffects.prototype, "fetchLobbyPlayers$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LobbyEffects.prototype, "updatePlayerStatus$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LobbyEffects.prototype, "subscribeToPlayerUpdates$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LobbyEffects.prototype, "subscribeToTimer$", void 0);
    LobbyEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            Store,
            ApolloLinkProviderService,
            Router])
    ], LobbyEffects);
    return LobbyEffects;
}());
export { LobbyEffects };
//# sourceMappingURL=lobby.effects.js.map