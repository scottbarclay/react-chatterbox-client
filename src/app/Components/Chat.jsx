import React from 'react';

const Chat = (props) => (
  <div>
    <h2>{props.username}</h2>
    <p>{props.message}</p>
  </div>
);

export default Chat;