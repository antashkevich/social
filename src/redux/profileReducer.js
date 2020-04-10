import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postsData: [
        {
            id: 1,
            message: "Post1",
            likes: "23",
        },
        {
            id: 2,
            message: "Post2",
            likes: "2",
        },
        {
            id: 3,
            message: "Post3",
            likes: "3",
        },
        {
            id: 4,
            message: "Post4",
            likes: "19",
        }
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [
                    ...state.postsData,
                    {
                        id: state.postsData.length + 1,
                        message: action.newPostText,
                        likes: 0,
                    }
                ],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
    
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
        }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
        }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
        }
};

export default profileReducer;
