import React from 'react';
import style from './chat.module.css';

const ChatHeader: React.FC = () => {
  return (
    <header className={style.chatHeader}>
      <h2 className={style.title}>Chat Room</h2>
    </header>
  )
}

export default ChatHeader;
