import {DispatchActionType, MessagesPageType} from "./redux-store";


type MessagesReducerType = (state: MessagesPageType, action: DispatchActionType) => MessagesPageType


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

const messagesReducer: MessagesReducerType = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            action.body && (state.newMessageBody = action.body);
            return state;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 4, messageText: body});
            return state
        }
        default:
            return state

    }
}

export const updateNewMessageBodyActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body});
export const sendMessageBodyActionCreator = () => ({type: SEND_MESSAGE});


export default messagesReducer;