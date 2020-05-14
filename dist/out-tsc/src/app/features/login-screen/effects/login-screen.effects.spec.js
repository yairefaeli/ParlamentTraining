import { ApolloLinkProviderService } from "src/app/core/apollo-link-provider.service";
import { LoginScreenEffects } from "./login-screen.effects";
import { TestBed, inject } from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { provideMockActions } from "@ngrx/effects/testing";
import { of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { ExecuteLogin, LoginSuccess } from "../login-screen.actions";
import { login } from "src/app/graphql/mutations/login.gql";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
describe('login-screen effects', function () {
    var actions$;
    var apolloLinkProvider;
    var loginScreenEffects;
    var router;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([LoginScreenEffects]),
                RouterTestingModule.withRoutes([{ path: '', redirectTo: '', pathMatch: 'full' }])
            ],
            providers: [
                LoginScreenEffects,
                {
                    provide: ApolloLinkProviderService,
                    useValue: jasmine.createSpyObj('ApolloLinkProviderService', ['execute$'])
                },
                provideMockActions(function () { return actions$; })
            ]
        });
    });
    beforeEach(function () {
        apolloLinkProvider = TestBed.get(ApolloLinkProviderService);
        loginScreenEffects = TestBed.get(LoginScreenEffects);
        router = TestBed.get(Router);
        router.initialNavigation();
    });
    it('should be created', inject([LoginScreenEffects], function (service) {
        expect(service).toBeTruthy();
    }));
    describe('executeLogin$', function () {
        it('should dispatch LoginSuccess with result from server', function () {
            var loginMutationResult = {
                data: {
                    login: 'token-token'
                }
            };
            apolloLinkProvider.execute$.and.returnValue(of(loginMutationResult));
            actions$ = hot('---a---', {
                a: new ExecuteLogin('DanishGod')
            });
            var expectedResult = cold('---b---', {
                b: new LoginSuccess('token-token')
            });
            expect(loginScreenEffects.executeLogin$).toBeObservable(expectedResult);
            expect(apolloLinkProvider.execute$).toHaveBeenCalledWith({
                query: login,
                variables: {
                    playerName: 'DanishGod'
                }
            });
        });
        /*
                it('should call navigate to direct to /lobby', () => {
                    const expectedPath = router;
                    expect(loginScreenEffects.loginSuccess$).toBeObservable(expectedPath)
                })
        */
    });
});
//# sourceMappingURL=login-screen.effects.spec.js.map