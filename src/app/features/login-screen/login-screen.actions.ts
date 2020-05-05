import { Action } from "@ngrx/store"

export enum loginScreenActionsTypes {
    EXECUTE_LOGIN = '[ LoginScreen ] execute login',
    LOGIN_SUCCESS = '[ LoginScreen ] execute login success'
}

export class ExecuteLogin implements Action {
    type = loginScreenActionsTypes.EXECUTE_LOGIN;

    constructor(public playerName: string){}
}

export class LoginSuccess implements Action {
    type = loginScreenActionsTypes.LOGIN_SUCCESS;

    constructor(public token: string){}
}