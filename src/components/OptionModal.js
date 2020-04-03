import React from "react";
import ReactModal from "react-modal";

const OptionModal = props => {
  ReactModal.setAppElement("#app");
  return (
    <ReactModal
      isOpen={!!props.selectedOption}
      contentLabel="Option Modal"
      onRequestClose={props.handleClosingModal}
      closeTimeoutMS={400}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__content">{props.selectedOption}</p>
      )}

      <button className="button" onClick={props.handleClosingModal}>
        Okay
      </button>
    </ReactModal>
  );
};

export default OptionModal;
