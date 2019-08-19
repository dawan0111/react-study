import React from 'react';
import style from './chat.module.css';

interface props {
  onCreate(isMe: boolean): void,
  inputChange(value: string): void,
  input: string,
}

const ChatAddForm: React.FC<props> = ({ onCreate, inputChange, input }) => {

  const _handlerFormSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    onCreate(true);
    inputChange('');
  }

  const _handlerInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    inputChange(e.currentTarget.value);
  }

  return (
    <form className={style.chatForm} onSubmit={_handlerFormSubmit}>
      <input type="text" placeholder="message" className={style.chatFormInput} value={input} onChange={_handlerInputChange}/>
      <button className={`${style.chatSendBtn} ${style.chatFormBtn}`}>
        Send
      </button>
    </form>
  )
}

export default ChatAddForm;
