import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ExecuteLogin, loginScreenActionsTypes, LoginSuccess } from "src/app/features/login-screen/login-screen.actions";
import { lobbyActionsTypes, FetchLobbyPlayersSuccess, FetchLobbyPlayers } from '../lobby.actions';

export const lobbyStateToken = 'lobby';

export interface CoreState {
    playerName: string;
    fetchedToken: string;
    LobbyPlayers: any[];
}

export const coreInitialState: CoreState = {
    playerName: undefined,
    fetchedToken: undefined,
    LobbyPlayers: undefined
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