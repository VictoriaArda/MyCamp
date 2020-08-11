import React from 'react';
import { useHistory } from "react-router-dom";
import Results from "../../pages/Results"

function ResultButton(props) {
    console.log(props);
  let history = useHistory();

  function handleClick() {
    history.push("/Results");
  }

  return (
    <div className="col">
    <button id="sbarbtn" className="btn btn-primary" type="submit" onClick={handleClick}>Search</button>
    <Results listingResults = {props.listingResults}></Results>
    </div>
  );
}

export default ResultButton;
