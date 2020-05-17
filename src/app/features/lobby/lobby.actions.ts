import { Action } from "@ngrx/store"

export enum lobbyActionsTypes {
    FETCH_LOBBY_PLAYERS = '[ lobby ] fetch lobby players',
    FETCH_LOBBY_PLAYERS_SUCCESS = '[ lobby ] fetch lobby players success',
    UPDATE_PLAYER_STATUS = '[ lobby ] update player status',
    UPDATE_PLAYER_STATUS_SUCCESS = '[ lobby ] update player status success',
    SUBSCRIBING_PLAYER_UPDATES = '[ lobby ] subscribing player updates',
    PLAYER_UPDATED = '[ lobby ] player updated',
    SUBSCRIBING_TO_TIMER = '[ lobby ] subscribing to timer',
    TIMER_ON = '[ lobby ] timer on'
}

export class FetchLobbyPlayers implements Action {
    type = lobbyActionsTypes.FETCH_LOBBY_PLAYERS;

    constructor() { }
}

export class FetchLobbyPlayersSuccess implements Action {
    type = lobbyActionsTypes.FETCH_LOBBY_PLAYERS_SUCCESS;

    constructor(public players: {[key: string]: string}) { }
}

export class UpdatePlayerStatus implements Action {
    type = lobbyActionsTypes.UPDATE_PLAYER_STATUS;

    constructor(public player: any) { }
}

export class UpdatePlayerStatusSuccess implements Action {
    type = lobbyActionsTypes.UPDATE_PLAYER_STATUS_SUCCESS;

    constructor(public status: string) { }
}

export class SubscribeToPlayerUpdates implements Action {
    type = lobbyActionsTypes.SUBSCRIBING_PLAYER_UPDATES

    constructor(public playerToken: string) { }
}

export class PlayerUpdated implements Action {
    type = lobbyActionsTypes.PLAYER_UPDATED

    constructor(public playerName: string, public status: string) { }
}

export class SubscribeToTimer implements Action {
    type = lobbyActionsTypes.SUBSCRIBING_TO_TIMER

    constructor() { }
}

export class TimerOn implements Action {
    type = lobbyActionsTypes.TIMER_ON

    constructor(public atSecond: String) { }
}
