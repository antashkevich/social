import React from 'react';
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';

const Dialogs = (props) => {
  return <div className="dialogs container__decor">
    <h2 className="container__title">My dialogs</h2>
    <div className="dialogs__container">
      <div className="dialogs__items">
        {props.state.dialogsData.map(item => 
          <DialogItem 
            name={item.name} 
            id={item.id}
            key={item.id}/>
        )}
      </div>
      <div className="dialogs__messages">
        {props.state.messageData.map(item => 
          <DialogMessage 
            message={item.message}
            key={item.id}/>
        )}
      </div>
    </div>
  </div>;
}

export default Dialogs;
