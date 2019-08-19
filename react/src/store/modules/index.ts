import { combineReducers } from 'redux';
import { ChatState, chat } from './chat';

export interface StoreState {
  chat: ChatState,
}

export default combineReducers<StoreState>({
  chat,
})