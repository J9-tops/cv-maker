import React, { useState } from "react";
import ShowIcon from "../assets/ShowIcon";
import HideIcon from "../assets/HideIcon";
import PropTypes from "prop-types";

const ShowResult = (props) => {
  const { showResult, handleShowResultToggle } = props;

  return (
    <button
      onClick={handleShowResultToggle}
      className="absolute bottom-4 right-5 rounded-full bg-red-700 p-2 xl:hidden"
      title="showCV"
    >
      {!showResult ? <ShowIcon /> : <HideIcon />}
    </button>
  );
};

ShowResult.propTypes = {
  showResult: PropTypes.bool,
  handleShowResultToggle: PropTypes.func,
};

export default ShowResult;
