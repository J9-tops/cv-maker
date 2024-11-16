import React from "react";
import AddIcon from "../assets/AddIcon";
import PropTypes from "prop-types";
const CreateNew = (props) => {
  const { isCreateButtonClicked, setIsCreateButtonClicked } = props;
  return (
    !isCreateButtonClicked && (
      <button
        onClick={() => {
          setIsCreateButtonClicked(true);
        }}
        className="fixed bottom-5 right-3 rounded-full bg-green-700 p-1 hover:before:pointer-events-none hover:before:absolute hover:before:-left-10 hover:before:-top-16 hover:before:font-timesNewRoman hover:before:text-2xl hover:before:font-bold hover:before:leading-none hover:before:text-red-600 hover:before:content-['Create_New_CV']"
      >
        <AddIcon />
      </button>
    )
  );
};

CreateNew.propTypes = {
  setIsCreateButtonClicked: PropTypes.func,
};

export default CreateNew;
