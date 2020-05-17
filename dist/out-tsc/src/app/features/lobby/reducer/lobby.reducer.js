var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { lobbyActionsTypes } from '../lobby.actions';
export var lobbyStateToken = 'lobby';
export var coreInitialState = {
    LobbyPlayers: undefined,
    playerStatus: "PENDING",
    timer: "0"
};
export var LobbyReducer = function (state, action) {
    if (state === void 0) { state = coreInitialState; }
    switch (action.type) {
        case lobbyActionsTypes.FETCH_LOBBY_PLAYERS: {
            return state;
        }
        case lobbyActionsTypes.FETCH_LOBBY_PLAYERS_SUCCESS: {
            return __assign(__assign({}, state), { LobbyPlayers: action.players });
        }
        case lobbyActionsTypes.UPDATE_PLAYER_STATUS: {
            return state;
        }
        case lobbyActionsTypes.UPDATE_PLAYER_STATUS_SUCCESS: {
            return __assign(__assign({}, state), { playerStatus: action.status });
        }
        case lobbyActionsTypes.PLAYER_UPDATED: {
            var playerName_1 = action.playerName;
            var playerStatus_1 = action.status;
            if (state.LobbyPlayers.some(function (player) { return player.name === playerName_1; })) {
                var newLobbyPlayers_1 = [];
                state.LobbyPlayers.forEach(function (player) {
                    if (player.name === playerName_1) {
                        newLobbyPlayers_1.push({ name: playerName_1, status: playerStatus_1 });
                    }
                    else {
                        newLobbyPlayers_1.push(player);
                    }
                });
                return __assign(__assign({}, state), { LobbyPlayers: newLobbyPlayers_1 });
            }
            else {
                return __assign(__assign({}, state), { LobbyPlayers: state.LobbyPlayers.concat([{ name: playerName_1, status: playerStatus_1 }]) });
            }
        }
        case lobbyActionsTypes.TIMER_ON: {
            return __assign(__assign({}, state), { timer: action.atSecond });
        }
    }
    ;
    return state;
};
export var getLobbyState = createFeatureSelector(lobbyStateToken);
export var getLobbyPlayers = createSelector(getLobbyState, function (state) { return state.LobbyPlayers; });
export var getPlayerStatus = createSelector(getLobbyState, function (state) { return state.playerStatus; });
export var getTimer = createSelector(getLobbyState, function (state) { return state.timer; });
//# sourceMappingURL=lobby.reducer.js.map