const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    newPostText: '',
    profile: null,
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
                        message: state.newPostText,
                        likes: 0,
                    }
                ],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
    
};

export const addPostActionCreator = () => ({ type: ADD_POST });
  
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export default profileReducer;
