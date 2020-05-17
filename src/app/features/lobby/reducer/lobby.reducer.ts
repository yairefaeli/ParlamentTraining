import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { lobbyActionsTypes, FetchLobbyPlayersSuccess, UpdatePlayerStatusSuccess, SubscribeToPlayerUpdates, PlayerUpdated, TimerOn } from '../lobby.actions';

export const lobbyStateToken = 'lobby';

export interface CoreState {
    LobbyPlayers: { [key: string]: string };
    playerStatus: string;
    timer: String;
}

export const coreInitialState: CoreState = {
    LobbyPlayers: undefined,
    playerStatus: "PENDING",
    timer: "0"
};

export const LobbyReducer = (
    state = coreInitialState,
    action: Action): CoreState => {
    switch (action.type) {
        case lobbyActionsTypes.FETCH_LOBBY_PLAYERS_SUCCESS: {
            return { ...state, LobbyPlayers: (action as FetchLobbyPlayersSuccess).players };
        }
        case lobbyActionsTypes.UPDATE_PLAYER_STATUS_SUCCESS: {
            return { ...state, playerStatus: (action as UpdatePlayerStatusSuccess).status };

        }
        case lobbyActionsTypes.PLAYER_UPDATED: {
            const playerName = (action as PlayerUpdated).playerName
            const playerStatus = (action as PlayerUpdated).status
            return { ...state, LobbyPlayers: { ...state.LobbyPlayers, [playerName]: playerStatus } }
        }
        case lobbyActionsTypes.TIMER_ON: {
            return { ...state, timer: (action as TimerOn).atSecond }
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

export const getTimer = createSelector(
    getLobbyState,
    (state: CoreState) => state.timer
)
