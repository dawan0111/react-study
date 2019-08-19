import React from 'react';
import style from './chat.module.css';

const ChatItem: React.FC<{ message: string, isMe: boolean }> = ({ message, isMe }) => {
  const chatClassName = `${style.chatMessage} ${isMe ? style.chatMessageMe : style.chatMessageOther}`;

  return (
    <div className={chatClassName}>
      {message}
    </div>
  )
}

export default ChatItem;
