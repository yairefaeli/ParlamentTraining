import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store'
import { Observable } from "rxjs";
import { ExecuteLogin, loginScreenActionsTypes, LoginSuccess } from "../login-screen.actions";
import { map, switchMap } from 'rxjs/operators';
import { ApolloLinkProviderService } from 'src/app/core/apollo-link-provider.service'
import { login } from 'src/app/graphql/mutations/login.gql'

@Injectable()
export class LoginScreenEffects {
    @Effect()
    executeLogin$: Observable<Action> = this.actions$.pipe(
        ofType<ExecuteLogin>(loginScreenActionsTypes.EXECUTE_LOGIN),
        switchMap(action => {
            return this.apolloLinkProvider.execute$({
                query: login,
                variables: {
                    playerName: action.playerName,
                },
            });
        }),
        map((result) => {
            console.log(`recieved token: ${result.data.login}`);
            return new LoginSuccess('token-token')
        })
    )

    constructor(public actions$: Actions, public apolloLinkProvider: ApolloLinkProviderService) { }
}