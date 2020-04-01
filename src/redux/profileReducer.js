const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likes: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    
};

export const addPostActionCreator = () => ({ type: ADD_POST });
  
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
