import { coreReducer } from './core.reducer';
import { loginScreenActionsTypes, ExecuteLogin } from 'src/app/features/login-screen/login-screen.actions';

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

        
    })

    describe('login-success action', () => {

    })
})