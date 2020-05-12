import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store'
import { Observable } from "rxjs";
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service'
import { updatePlayerStatus } from 'src/app/graphql/mutations/update-player-status.gql';

import { fetchLobbyPlayers } from 'src/app/graphql/query/fetch-lobby-players.gql';

import { subscribeToPlayerUpdates } from 'src/app/graphql/subscriptions/subscribe-to-player-updates.gql'
import {
    lobbyActionsTypes,
    FetchLobbyPlayers,
    FetchLobbyPlayersSuccess,
    UpdatePlayerStatus,
    UpdatePlayerStatusSuccess,
    SubscribeToPlayerUpdates,
    PlayerUpdated
} from "../lobby.actions";
import { getPlayerName } from "src/app/core/reducers/core.reducer";

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
            const players: any[] = result.data.getPlayers;
            players.forEach(element => console.log(element));

            return new FetchLobbyPlayersSuccess(players.filter(player => player.name != playerName));
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
            console.log(result.data.updatePlayerStatus.player.status)
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

            })
        }),
        map((result) => {
            return new PlayerUpdated(result.data.name, result.data.status)
        })
    )

    constructor(
        public actions$: Actions,
        public store: Store,
        public apolloLinkProvider: ApolloLinkProviderService
    ) { }
}