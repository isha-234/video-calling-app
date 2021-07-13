//The first page of the web application
//Home screen
import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    //Generate a random id using shortid
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };
  //Designing the layout and UI of the HomePage
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Connect with your friend</h2>
            <p>
              Click to start a video call
            </p>
            <div className="action-btn">
              <button className="btn violet" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                Start Call
              </button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://media.istockphoto.com/vectors/illustration-of-two-happy-people-talking-via-video-call-vector-id1277041996?k=6&m=1277041996&s=612x612&w=0&h=XJU9lI9plckmABGRYGAfI73Td4VtDqPPYnW0SB78UuA=" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
