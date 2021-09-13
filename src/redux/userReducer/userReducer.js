const SET_CURRENT_USER = 'SET_CURRENT_USER'


const Initial_State = {
    currentUser: null
}


const userReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state;
    }
}

export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, user })

export default userReducer;