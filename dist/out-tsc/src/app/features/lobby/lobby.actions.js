export var lobbyActionsTypes;
(function (lobbyActionsTypes) {
    lobbyActionsTypes["FETCH_LOBBY_PLAYERS"] = "[ lobby ] fetch lobby players";
    lobbyActionsTypes["FETCH_LOBBY_PLAYERS_SUCCESS"] = "[ lobby ] fetch lobby players success";
    lobbyActionsTypes["UPDATE_PLAYER_STATUS"] = "[ lobby ] update player status";
    lobbyActionsTypes["UPDATE_PLAYER_STATUS_SUCCESS"] = "[ lobby ] update player status success";
    lobbyActionsTypes["SUBSCRIBING_PLAYER_UPDATES"] = "[ lobby ] subscribing player updates";
    lobbyActionsTypes["PLAYER_UPDATED"] = "[ lobby ] player updated";
    lobbyActionsTypes["SUBSCRIBING_TO_TIMER"] = "[ lobby ] subscribing to timer";
    lobbyActionsTypes["TIMER_ON"] = "[ lobby ] timer on";
})(lobbyActionsTypes || (lobbyActionsTypes = {}));
var FetchLobbyPlayers = /** @class */ (function () {
    function FetchLobbyPlayers() {
        this.type = lobbyActionsTypes.FETCH_LOBBY_PLAYERS;
    }
    return FetchLobbyPlayers;
}());
export { FetchLobbyPlayers };
var FetchLobbyPlayersSuccess = /** @class */ (function () {
    function FetchLobbyPlayersSuccess(players) {
        this.players = players;
        this.type = lobbyActionsTypes.FETCH_LOBBY_PLAYERS_SUCCESS;
    }
    return FetchLobbyPlayersSuccess;
}());
export { FetchLobbyPlayersSuccess };
var UpdatePlayerStatus = /** @class */ (function () {
    function UpdatePlayerStatus(player) {
        this.player = player;
        this.type = lobbyActionsTypes.UPDATE_PLAYER_STATUS;
    }
    return UpdatePlayerStatus;
}());
export { UpdatePlayerStatus };
var UpdatePlayerStatusSuccess = /** @class */ (function () {
    function UpdatePlayerStatusSuccess(status) {
        this.status = status;
        this.type = lobbyActionsTypes.UPDATE_PLAYER_STATUS_SUCCESS;
    }
    return UpdatePlayerStatusSuccess;
}());
export { UpdatePlayerStatusSuccess };
var SubscribeToPlayerUpdates = /** @class */ (function () {
    function SubscribeToPlayerUpdates(playerToken) {
        this.playerToken = playerToken;
        this.type = lobbyActionsTypes.SUBSCRIBING_PLAYER_UPDATES;
    }
    return SubscribeToPlayerUpdates;
}());
export { SubscribeToPlayerUpdates };
var PlayerUpdated = /** @class */ (function () {
    function PlayerUpdated(playerName, status) {
        this.playerName = playerName;
        this.status = status;
        this.type = lobbyActionsTypes.PLAYER_UPDATED;
    }
    return PlayerUpdated;
}());
export { PlayerUpdated };
var SubscribeToTimer = /** @class */ (function () {
    function SubscribeToTimer() {
        this.type = lobbyActionsTypes.SUBSCRIBING_TO_TIMER;
    }
    return SubscribeToTimer;
}());
export { SubscribeToTimer };
var TimerOn = /** @class */ (function () {
    function TimerOn(atSecond) {
        this.atSecond = atSecond;
        this.type = lobbyActionsTypes.TIMER_ON;
    }
    return TimerOn;
}());
export { TimerOn };
//# sourceMappingURL=lobby.actions.js.map