import React from 'react';
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {

  let addNewMessage = (values) => {
    props.sendMessage(values.NewMessageBody);
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
    <AddMessageReduxForm onSubmit={addNewMessage} />
  </div>;
}

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit} className="create-post" autoComplete="off">
    <Field 
      type="text"
      component="input"
      name="NewMessageBody"
      className="create-post__area" 
      placeholder="New message" />
    <button className="button-action">Add</button>
  </form>
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
