import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_INITIAL = 'SET-INITIAL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    initial: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
            case SET_INITIAL:
                return {
                    ...state,
                    initial: true,
                };
        default:
            return state;
    }
    
};

export const setAuthUserData = (id, email, login) => {
    return { type: SET_USER_DATA, data: {id, email, login} }
};
export const setInitial = () => {
    return { type: SET_INITIAL}
};

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login));
                }
                dispatch(setInitial())
            });
    }
};
  
export default authReducer;
