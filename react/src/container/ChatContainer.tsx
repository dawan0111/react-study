import React, { useEffect } from 'react';

import io from 'socket.io-client';
import { socketConf } from '../config';

import Chat from '../components/chat/Chat';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { ChatItem, actionCreators } from '../store/modules/chat';
import { bindActionCreators } from 'redux';

interface props {
  chatItems: ChatItem[],
  input: string,
  ChatActions: typeof actionCreators,
}

const socket = io(socketConf.endpoint);

const ChatContainer: React.FC<props> = ({ ChatActions, input, chatItems }) => {

  useEffect(() => {
    socket.on('chat message', function(message: string): void {
      const chatItem: ChatItem = {
        message,
        isMe: false,
      }
      ChatActions.addChating(chatItem);
    })
  }, [])

  const onCreate = (isMe: boolean): void => {
    const chatItem: ChatItem = {
      message: input,
      isMe,
    }

    socket.emit('chat message', chatItem.message);
    ChatActions.addChating(chatItem);
  }

  const inputChange = (value: string):void => {
    ChatActions.changeInput(value);
  }

  return (
    <Chat
      input={input}
      onCreate={onCreate}
      inputChange={inputChange}
      chatItems={chatItems}
    />
  )
}

export default connect(
  ({chat}: StoreState) => ({
    input: chat.input,
    chatItems: chat.chatItems,
  }),
  (dispatch) => ({
    ChatActions: bindActionCreators(actionCreators, dispatch),
  })
)(ChatContainer);
