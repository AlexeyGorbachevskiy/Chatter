const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Jeff Bezos'},
        {id: 2, name: 'Elon Musk'},
        {id: 3, name: 'Jordan Peterson'},

    ],
    messagesData: [
        {id: 1, messageText: 'I\'m fine. How\'re you?'},
        {id: 2, messageText: 'Hellooooooooooooooooooooooooooooooooooooooooo'},
        {id: 3, messageText: 'Byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'},

    ],
    newMessageBody: '',
}

const messagesReducer = (state = initialState, action: any): any => {

    // copy only what will be changed
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 4, messageText: body}],
            }
        }
        default:
            return state

    }
}

export const updateNewMessageBodyActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body});
export const sendMessageBodyActionCreator = () => ({type: SEND_MESSAGE});


export default messagesReducer;