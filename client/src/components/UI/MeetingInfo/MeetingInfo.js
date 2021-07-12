//Showing the calling information to the user initiating the call on the CallPage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./MeetingInfo.scss";

const MeetingInfo = ({ setMeetInfoPopup, url }) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your Call information </h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setMeetInfoPopup(false);
          }}
        />
      </div>
      <p className="info-text">
        Share this call link with your friend to have a one-to-one conversation
      </p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
      <p className="small-text">Joined as Admin</p>
      </div>
  );
};

export default MeetingInfo;