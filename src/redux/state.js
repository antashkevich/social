const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: "Sasha1",
                },
                {
                    id: 2,
                    name: "Sasha2",
                },
                {
                    id: 3,
                    name: "Sasha3",
                },
                {
                    id: 4,
                    name: "Sasha4",
                },
                {
                    id: 5,
                    name: "Sasha5",
                }
            ],
            messageData: [
                {
                    id: 1,
                    message: "Hi!",
                },
                {
                    id: 2,
                    message: "Hi!Hi!",
                },
                {
                    id: 3,
                    message: "Hi!Hi!Hi!",
                }
            ]
        },
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
   
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likes: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
  
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;

window.state = store;
