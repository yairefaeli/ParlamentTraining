import { ApolloLinkProviderService } from "src/app/core/apollo-link-provider.service";
import { LoginScreenEffects } from "./login-screen.effects";
import { TestHotObservable } from "jasmine-marbles/src/test-observables"
import { TestBed, inject } from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { provideMockActions } from "@ngrx/effects/testing"
import { FetchResult } from "apollo-link";
import { of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { ExecuteLogin, LoginSuccess } from "../login-screen.actions";
import { query } from "@angular/core/src/render3";
import { login } from "src/app/graphql/mutations/login.gql";


describe('login-screen effects', () => {
    let actions$: TestHotObservable;
    let apolloLinkProvider: ApolloLinkProviderService;
    let loginScreenEffects: LoginScreenEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([LoginScreenEffects])
            ],
            providers: [
                LoginScreenEffects,
                {
                    provide: ApolloLinkProviderService,
                    useValue: jasmine.createSpyObj(
                        'ApolloLinkProviderService',
                        ['execute$']
                    )
                },
                provideMockActions(() => actions$)
            ]
        })
    });

    beforeEach(() => {
        apolloLinkProvider = TestBed.get(ApolloLinkProviderService);
        loginScreenEffects = TestBed.get(LoginScreenEffects)
    });

    it('should be created', inject(
        [LoginScreenEffects],
        (service: LoginScreenEffects) => {
            expect(service).toBeTruthy();
        }
    ));

    describe('executeLogin$', () => {
        it('should dispatch LoginSuccess with result from server', () => {
            const loginMutationResult = {
                data: {
                    login: 'token-token'
                }
            } as FetchResult;

            (apolloLinkProvider.execute$ as jasmine.Spy).and.returnValue(of(loginMutationResult))

            actions$ = hot('---a---', {
                a: new ExecuteLogin('DanishGod')
            });

            const expectedResult = cold('---b---', {
                b: new LoginSuccess('token-token')
            });

            expect(loginScreenEffects.executeLogin$).toBeObservable(expectedResult);

            expect(apolloLinkProvider.execute$).toHaveBeenCalledWith({
                query: login,
                variables: {
                    playerName:'DanishGod'
                }
            })
        })
    })
})