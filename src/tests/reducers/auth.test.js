import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '123'
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action) //state inicial, ação a fazer (adicionar uid)
    expect(state.uid).toBe(action.uid)
});

test('should clear uid for logout', () =>{
    const action = {
        type: 'LOGOUT'
        //uid: ''  <- se tiver dá erro!!!
    };
    const state = authReducer({uid: '100'}, action);
    //expect(state.uid).toBe(action.uid)
    expect(state).toEqual({})
})