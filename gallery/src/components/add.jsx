import React from "react";
import PropTypes from "prop-types";
import '../CSS/add.scss';


export default function add({ onUpload }) {
  return (
    <div>
      <div className="FilesDragAndDrop__area">
        Hey, drop me some files
        <span role="img" aria-label="emoji" className="area__icon">
          &#128526;
        </span>
      </div>
    </div>
  );
}

add.propTypes = {
    onUpload: PropTypes.func.isRequired,
};