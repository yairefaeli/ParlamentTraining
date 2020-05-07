import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store'
import { Observable } from "rxjs";
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service'
import { Router } from "@angular/router";

import { fetchLobbyPlayers } from 'src/app/graphql/query/fetch-lobby-players.gql';
import { lobbyActionsTypes, FetchLobbyPlayers, FetchLobbyPlayersSuccess } from "../lobby.actions";
import { getPlayerName } from "src/app/core/reducers/core.reducer";

@Injectable()
export class LobbyEffects {

    @Effect()
    fetchLobbyPlayers$: Observable<Action> = this.actions$.pipe(
        ofType<FetchLobbyPlayers>(lobbyActionsTypes.FETCH_LOBBY_PLAYERS),
        switchMap(action => {
            console.log(action);
            return this.apolloLinkProvider.execute$({
                query: fetchLobbyPlayers,
            });
        }),
        withLatestFrom(this.store.select(getPlayerName)),
        map(([result, playerName]) => {
            const players: any[] = result.data.getPlayers;
            console.log(`recieved players: ${players}`);
            
            return new FetchLobbyPlayersSuccess(players.filter(player => player.name != playerName));
        })
    )

    constructor(
        public actions$: Actions,
        public store: Store,
        public apolloLinkProvider: ApolloLinkProviderService
    ) { }
}