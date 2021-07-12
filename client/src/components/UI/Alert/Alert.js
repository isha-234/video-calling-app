import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./Alert.scss";

//Give an alert when a message is sent
const Alert = ({ messageAlert }) => {
  return (
    <div className="message-alert-popup">
      <div className="alert-header">
        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        <h3>{messageAlert.payload.user}</h3>
      </div>
      <p className="alert-msg">{messageAlert.payload.msg}</p>
    </div>
  );
};

export default Alert;