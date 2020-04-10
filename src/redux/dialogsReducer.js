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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [
                    ...state.messageData,
                    {
                        id: state.messageData.length + 1,
                        message: body,
                    }
                ]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
