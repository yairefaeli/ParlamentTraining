export var loginScreenActionsTypes;
(function (loginScreenActionsTypes) {
    loginScreenActionsTypes["EXECUTE_LOGIN"] = "[ LoginScreen ] execute login";
    loginScreenActionsTypes["LOGIN_SUCCESS"] = "[ LoginScreen ] execute login success";
})(loginScreenActionsTypes || (loginScreenActionsTypes = {}));
var ExecuteLogin = /** @class */ (function () {
    function ExecuteLogin(playerName) {
        this.playerName = playerName;
        this.type = loginScreenActionsTypes.EXECUTE_LOGIN;
    }
    return ExecuteLogin;
}());
export { ExecuteLogin };
var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(token) {
        this.token = token;
        this.type = loginScreenActionsTypes.LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());
export { LoginSuccess };
//# sourceMappingURL=login-screen.actions.js.map