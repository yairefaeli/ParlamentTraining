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
import { loginScreenActionsTypes } from "src/app/features/login-screen/login-screen.actions";
export var coreStateToken = 'core';
export var coreInitialState = {
    playerName: undefined,
    loginToken: undefined,
};
export var coreReducer = function (state, action) {
    if (state === void 0) { state = coreInitialState; }
    switch (action.type) {
        case loginScreenActionsTypes.EXECUTE_LOGIN: {
            return __assign(__assign({}, state), { playerName: action.playerName });
        }
        case loginScreenActionsTypes.LOGIN_SUCCESS: {
            return __assign(__assign({}, state), { loginToken: action.token });
        }
    }
    ;
    return state;
};
export var getCoreState = createFeatureSelector(coreStateToken);
export var getPlayerName = createSelector(getCoreState, function (state) { return state.playerName; });
//# sourceMappingURL=core.reducer.js.map