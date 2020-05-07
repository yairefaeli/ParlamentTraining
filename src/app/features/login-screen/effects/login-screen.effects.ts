import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store'
import { Observable } from "rxjs";
import { ExecuteLogin, loginScreenActionsTypes, LoginSuccess } from "../login-screen.actions";
import { map, switchMap, tap } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service'
import { login } from 'src/app/graphql/mutations/login.gql'
import { Router } from "@angular/router";

@Injectable()
export class LoginScreenEffects {
    @Effect()
    executeLogin$: Observable<Action> = this.actions$.pipe(
        ofType<ExecuteLogin>(loginScreenActionsTypes.EXECUTE_LOGIN),
        switchMap(action => {
            console.log(action.playerName);
            return this.apolloLinkProvider.execute$({
                query: login,
                variables: {
                    playerName: action.playerName,
                },
            });
        }),
        map((result) => {
            console.log(`recieved token: ${result.data.login}`);
            return new LoginSuccess(result.data.login)
        })
    )

    @Effect({ dispatch: false })
    loginSuccess$: Observable<Action> = this.actions$.pipe(
        ofType<LoginSuccess>(loginScreenActionsTypes.LOGIN_SUCCESS),
        tap(() => {
            this.router.navigate(['/lobby']);
        })
    );

    constructor(
        public actions$: Actions,
        public router: Router,
        public apolloLinkProvider: ApolloLinkProviderService
    ) { }
}