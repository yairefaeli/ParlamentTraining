import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { lobbyActionsTypes, FetchLobbyPlayersSuccess, UpdatePlayerStatusSuccess } from '../lobby.actions';
import { Player } from '@angular/core/src/render3/interfaces/player';

export const lobbyStateToken = 'lobby';

export interface CoreState {
    LobbyPlayers: Player[];
    playerStatus: string
}

export const coreInitialState: CoreState = {
    LobbyPlayers: undefined,
    playerStatus: "PENDING"
};

export const LobbyReducer = (
    state = coreInitialState,
    action: Action): CoreState => {
    switch (action.type) {
        case lobbyActionsTypes.FETCH_LOBBY_PLAYERS: {
            return state;
        }
        case lobbyActionsTypes.FETCH_LOBBY_PLAYERS_SUCCESS: {
            return { ...state, LobbyPlayers: (action as FetchLobbyPlayersSuccess).players };
        }
        case lobbyActionsTypes.UPDATE_PLAYER_STATUS: {
            return state;
        }
        case lobbyActionsTypes.UPDATE_PLAYER_STATUS_SUCCESS: {
            console.log((action as UpdatePlayerStatusSuccess).status)
            return { ...state, playerStatus: (action as UpdatePlayerStatusSuccess).status };
        
        }
    };
    return state;
}

export const getLobbyState = createFeatureSelector<CoreState>(
    lobbyStateToken
);

export const getLobbyPlayers = createSelector(
    getLobbyState,
    (state: CoreState) => state.LobbyPlayers
)


export const getPlayerStatus = createSelector(
    getLobbyState,
    (state: CoreState) => state.playerStatus
)
