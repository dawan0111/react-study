export const ADD_CHATTING = 'ADD_CHATTING';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export interface ChatItem {
  message: string,
  isMe: boolean
}
export interface ChatState {
  chatItems: ChatItem[],
  input: string,
}

interface AddChatingAction {
  type: typeof ADD_CHATTING,
  chat: ChatItem,
}
interface ChangeInputAction {
  type: typeof CHANGE_INPUT,
  data: string,
}

export const addChating = (chat: ChatItem): AddChatingAction => ({
  type: ADD_CHATTING,
  chat,
})
export const changeInput = (data: string): ChangeInputAction => ({
  type: CHANGE_INPUT,
  data,
})

export const actionCreators = {
  addChating,
  changeInput,
}

export type ChatingActionType = | AddChatingAction | ChangeInputAction;

const initState: ChatState = {
  chatItems: [],
  input: '',
}

export const chat = function(state = initState, action: ChatingActionType): ChatState {
  switch(action.type) {
    case ADD_CHATTING:
      return {
        ...state,
        chatItems: [...state.chatItems, action.chat],
      }
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.data,
      }
    default:
      return state;
  }
}