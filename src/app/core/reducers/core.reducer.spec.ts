import { coreReducer } from './core.reducer';
import { loginScreenActionsTypes, ExecuteLogin, LoginSuccess } from 'src/app/features/login-screen/login-screen.actions';

describe('core-reducer', () => {
    describe('execute-login action', () => {
        it('should update playerName only(with initState)', () => {
            const expectedState = {
                playerName: 'DanishGod',
                loginToken: undefined
            }

            const resultState = coreReducer(undefined, {
                type: loginScreenActionsTypes.EXECUTE_LOGIN,
                playerName: 'DanishGod'
            } as ExecuteLogin)

            expect(resultState).toEqual(expectedState);
        })

        it('should update playerName only with previous state', () => {
            const initalState = {
                playerName: 'NotDanishGod',
                loginToken: 'token-token'
            }

            const expectedState = {
                playerName: 'DanishGod',
                loginToken: 'token-token'
            }

            const resultState = coreReducer(initalState, {
                type: loginScreenActionsTypes.EXECUTE_LOGIN,
                playerName: 'DanishGod'
            } as ExecuteLogin)

            expect(resultState).toEqual(expectedState);

        })
    })

    describe('login-success action', () => {
        it('should update loginToken only(with initState)', () => {
        })

        it('should update loginToken only with previous state', () => {
            const initalState = {
                playerName: 'DanishGod',
                loginToken: undefined
            }

            const expectedState = {
                playerName: 'DanishGod',
                loginToken: 'token-token'
            }

            const resultState = coreReducer(initalState, {
                type: loginScreenActionsTypes.LOGIN_SUCCESS,
                token: 'token-token'
            } as LoginSuccess)

            expect(resultState).toEqual(expectedState);

        })
    })
})