import { coreReducer } from './core.reducer';
import { loginScreenActionsTypes } from 'src/app/features/login-screen/login-screen.actions';
describe('core-reducer', function () {
    describe('execute-login action', function () {
        it('should update playerName only(with initState)', function () {
            var expectedState = {
                playerName: 'DanishGod',
                loginToken: undefined
            };
            var resultState = coreReducer(undefined, {
                type: loginScreenActionsTypes.EXECUTE_LOGIN,
                playerName: 'DanishGod'
            });
            expect(resultState).toEqual(expectedState);
        });
        it('should update playerName only with previous state', function () {
            var initalState = {
                playerName: 'NotDanishGod',
                loginToken: 'token-token'
            };
            var expectedState = {
                playerName: 'DanishGod',
                loginToken: 'token-token'
            };
            var resultState = coreReducer(initalState, {
                type: loginScreenActionsTypes.EXECUTE_LOGIN,
                playerName: 'DanishGod'
            });
            expect(resultState).toEqual(expectedState);
        });
    });
    describe('login-success action', function () {
        it('should update loginToken only(with initState)', function () {
        });
        it('should update loginToken only with previous state', function () {
            var initalState = {
                playerName: 'DanishGod',
                loginToken: undefined
            };
            var expectedState = {
                playerName: 'DanishGod',
                loginToken: 'token-token'
            };
            var resultState = coreReducer(initalState, {
                type: loginScreenActionsTypes.LOGIN_SUCCESS,
                token: 'token-token'
            });
            expect(resultState).toEqual(expectedState);
        });
    });
});
//# sourceMappingURL=core.reducer.spec.js.map