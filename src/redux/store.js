import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

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
            ],
            newMessageBody: '',
        },
        sidebar: {},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;

window.state = store;
