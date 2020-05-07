import { Action } from "@ngrx/store"

export enum lobbyActionsTypes {
    FETCH_LOBBY_PLAYERS = '[ lobby ] fetch lobby players',
    FETCH_LOBBY_PLAYERS_SUCCESS = '[ lobby ] fetch lobby players success'
}

export class FetchLobbyPlayers implements Action {
    type = lobbyActionsTypes.FETCH_LOBBY_PLAYERS;

    constructor(){}
}

export class FetchLobbyPlayersSuccess implements Action {
    type = lobbyActionsTypes.FETCH_LOBBY_PLAYERS_SUCCESS;

    constructor(public players: any[]){}
}