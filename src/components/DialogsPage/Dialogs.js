import React from 'react';
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onNewMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageBody(text)
  };

  return <div className="dialogs container__decor">
    <h2 className="container__title">My dialogs</h2>
    <div className="dialogs__container">
      <div className="dialogs__items">
        {props.dialogsPage.dialogsData.map(item => 
          <DialogItem 
            name={item.name} 
            id={item.id}
            key={item.id}/>
        )}
      </div>
      <div className="dialogs__messages">
        {props.dialogsPage.messageData.map(item => 
          <DialogMessage 
            message={item.message}
            key={item.id}/>
        )}
      </div>
    </div>
    <div className="create-post">
      <input 
        ref={newMessageElement}
        onChange={onNewMessageChange}
        value={props.dialogsPage.newMessageBody}
        type="text" 
        className="create-post__area" 
        placeholder="New message" />
      <button onClick={onSendMessage} className="button-action">Add</button>
    </div>
  </div>;
}

export default Dialogs;
