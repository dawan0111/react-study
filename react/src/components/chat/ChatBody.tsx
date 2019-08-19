import React from 'react';
import style from './chat.module.css';
import { ChatItem as ChatItemFormat} from '../../store/modules/chat';
import ChatItem from './ChatItem'

interface props {
  chatItems: Array<ChatItemFormat>,
}

const ChatBody: React.FC<props> = ({ chatItems }) => {
  return (
    <div className={style.chatBody}>
      {chatItems.map((chatItem, index) => (
        <ChatItem message={chatItem.message} isMe={chatItem.isMe} key={index} />
      ))}
    </div>
  )
}

export default ChatBody;
