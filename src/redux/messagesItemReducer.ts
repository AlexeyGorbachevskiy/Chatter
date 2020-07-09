type DialogsDataArray = {
    id: number
    name: string
}
type MessagesDataArray = {
    id: number
    messageText: string
}

export type InitialStateType = typeof initialState;

let initialState = {
    dialogsData: [
        {id: 1, name: 'Jeff Bezos'},
        {id: 2, name: 'Elon Musk'},
        {id: 3, name: 'Jordan Peterson'},

    ] as Array<DialogsDataArray>,
    messagesData: [
        {id: 1, messageText: 'I\'m fine. How\'re you?'},
        {id: 2, messageText: 'Hellooooooooooooooooooooooooooooooooooooooooo'},
        {id: 3, messageText: 'Byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'},

    ] as Array<MessagesDataArray>,
    newMessageBody: '',
}

export type MessagesReducerActionTypes = UpdateNewMessageBodyActionCreatorType | SendMessageBodyActionCreatorType

const messagesItemReducer = (state: InitialStateType = initialState, action: MessagesReducerActionTypes): InitialStateType => {

    // copy only what will be changed
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.currentValue
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


export type UpdateNewMessageBodyActionCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    currentValue: string
}
export type SendMessageBodyActionCreatorType = {
    type: typeof SEND_MESSAGE,
}


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
export const updateNewMessageBodyActionCreator = (currentValue: string): UpdateNewMessageBodyActionCreatorType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    currentValue
});
export const sendMessageBodyActionCreator = (): SendMessageBodyActionCreatorType => ({type: SEND_MESSAGE});


export default messagesItemReducer;