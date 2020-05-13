import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { lobbyActionsTypes, FetchLobbyPlayersSuccess, UpdatePlayerStatusSuccess, SubscribeToPlayerUpdates, PlayerUpdated } from '../lobby.actions';

export const lobbyStateToken = 'lobby';

export interface CoreState {
    LobbyPlayers: any[];
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
            return { ...state, playerStatus: (action as UpdatePlayerStatusSuccess).status };

        }
        case lobbyActionsTypes.PLAYER_UPDATED: {
            const playerName = (action as PlayerUpdated).playerName
            const playerStatus = (action as PlayerUpdated).status

            if (state.LobbyPlayers.some(player => player.name === playerName)) {
                let newLobbyPlayers: any[] = []
                state.LobbyPlayers.forEach((player) => {
                    if (player.name === playerName) {
                        newLobbyPlayers.push({ name: playerName, status: playerStatus })
                    } else {
                        newLobbyPlayers.push(player)
                    }
                })
                return { ...state, LobbyPlayers: newLobbyPlayers }
            } else {
                return { ...state, LobbyPlayers: state.LobbyPlayers.concat([{ name: playerName, status: playerStatus }]) }
            }
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
