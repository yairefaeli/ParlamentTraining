import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ExecuteLogin, loginScreenActionsTypes, LoginSuccess } from "src/app/features/login-screen/login-screen.actions";

export const coreStateToken = 'core';

export interface CoreState {
    playerName: string;
    loginToken: string;
    LobbyPlayers: any[];
}

export const coreInitialState: CoreState = {
    playerName: undefined,
    loginToken: undefined,
    LobbyPlayers: undefined
};

export const coreReducer = (
    state = coreInitialState,
    action: Action): CoreState => {
    switch (action.type) {
        case loginScreenActionsTypes.EXECUTE_LOGIN: {
            return { ...state, playerName: (action as ExecuteLogin).playerName };
        }
        case loginScreenActionsTypes.LOGIN_SUCCESS: {
            return { ...state, loginToken: (action as LoginSuccess).token };
        }
    };
    return state;
}

export const getCoreState = createFeatureSelector<CoreState>(
    coreStateToken
);

export const getPlayerName = createSelector(
    getCoreState,
    (state: CoreState) => state.playerName
)

export const getLobbyPlayers = createSelector(
    getCoreState,
    (state: CoreState) => state.LobbyPlayers
)