//This page appears on the screen when an invalid url has been entered
import React from 'react';
import { Link } from "react-router-dom";
import "./NoMatch.scss";
import Header from "../UI/Header/Header";

//Designing the layout and UI of the page
const NoMatch = () => {
  return (
    <div className="no-match">
      <Header />
      <div className="no-match__content">
        <h2>Invalid video call name.</h2>
        <div className="action-btn">
          <Link className="btn violet" to="/">
            Return to home screen
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NoMatch;