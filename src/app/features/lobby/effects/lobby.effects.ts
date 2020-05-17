import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store'
import { Observable } from "rxjs";
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service'
import { updatePlayerStatus } from 'src/app/graphql/mutations/update-player-status.gql';

import { fetchLobbyPlayers } from 'src/app/graphql/query/fetch-lobby-players.gql';

import { subscribeToPlayerUpdates } from 'src/app/graphql/subscriptions/subscribe-to-player-updates.gql'
import { subscribeToTimer } from 'src/app/graphql/subscriptions/subscribe-to-timer.qgl'

import {
    lobbyActionsTypes,
    FetchLobbyPlayers,
    FetchLobbyPlayersSuccess,
    UpdatePlayerStatus,
    UpdatePlayerStatusSuccess,
    SubscribeToPlayerUpdates,
    PlayerUpdated,
    SubscribeToTimer,
    TimerOn
} from "../lobby.actions";
import { getPlayerName } from "src/app/core/reducers/core.reducer";
import { Router } from "@angular/router";

@Injectable()
export class LobbyEffects {

    @Effect()
    fetchLobbyPlayers$: Observable<Action> = this.actions$.pipe(
        ofType<FetchLobbyPlayers>(lobbyActionsTypes.FETCH_LOBBY_PLAYERS),
        switchMap(action => {

            return this.apolloLinkProvider.execute$({
                query: fetchLobbyPlayers
            });
        }),
        withLatestFrom(this.store.select(getPlayerName)),
        map(([result, playerName]) => {
            const players: { [key: string]: string } = {}
            result.data.getPlayers.map(
                player => {
                    if (playerName !== player.name) {
                        Object.assign(players, { [player.name]: player.status })
                    }
                });
            console.log(players)
            return new FetchLobbyPlayersSuccess(players);
        })
    )

    @Effect()
    updatePlayerStatus$: Observable<Action> = this.actions$.pipe(
        ofType<UpdatePlayerStatus>(lobbyActionsTypes.UPDATE_PLAYER_STATUS),
        switchMap(action => {
            return this.apolloLinkProvider.execute$({
                query: updatePlayerStatus,
                variables: {
                    token: action.player.name,
                    status: action.player.status

                }
            });
        }),
        map((result) => {
            return new UpdatePlayerStatusSuccess(
                result.data.updatePlayerStatus.player.status as string
            );
        })
    );

    @Effect()
    subscribeToPlayerUpdates$: Observable<Action> = this.actions$.pipe(
        ofType<SubscribeToPlayerUpdates>(lobbyActionsTypes.SUBSCRIBING_PLAYER_UPDATES),
        switchMap(action => {
            return this.apolloLinkProvider.execute$({
                query: subscribeToPlayerUpdates,
                variables: {
                    loginToken: action.playerToken
                }
            })
        }),
        map((result) => {
            return new PlayerUpdated(
                result.data.playerStatusChanged.name,
                result.data.playerStatusChanged.status
            )
        })
    )

    @Effect()
    subscribeToTimer$: Observable<Action> = this.actions$.pipe(
        ofType<SubscribeToTimer>(lobbyActionsTypes.SUBSCRIBING_TO_TIMER),
        switchMap(action => {
            return this.apolloLinkProvider.execute$({
                query: subscribeToTimer,
                variables: {
                    playerToken: ""
                }
            })
        }),
        map((result) => {
            if (result.data.subscribeToTimer == "5") {
                this.router.navigate(['/game']);
            }
            return new TimerOn(result.data.subscribeToTimer);
        })
    )

    constructor(
        public actions$: Actions,
        public store: Store,
        public apolloLinkProvider: ApolloLinkProviderService,
        public router: Router,
    ) { }
}