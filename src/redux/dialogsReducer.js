const UPDATE_NEW_MESSAGE_BODY =  'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: state.messageData.length + 1,
                message: body,
            };
            state.messageData.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
  
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
