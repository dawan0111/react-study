import React from 'react';

import style from './chat.module.css';

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatAddForm from './ChatAddForm';

import { ChatItem } from '../../store/modules/chat';

interface props {
  input: string,
  onCreate(isMe: boolean): void,
  inputChange(value: string): void,
  chatItems: Array<ChatItem>,
}

const Chat: React.FC<props> = ({ onCreate, inputChange, chatItems, input }) => {

  return (
    <div className={style.chat}>
      <ChatHeader />
      <ChatBody chatItems={chatItems} />
      <ChatAddForm onCreate={onCreate} inputChange={inputChange} input={input} />
    </div>
  )  
}

export default Chat;
