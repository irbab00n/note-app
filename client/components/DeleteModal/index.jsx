import React from 'react';

import ButtonBlock from './ButtonBlock.jsx';

const style = {
  modalBackground: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: 9998,
    background: 'rgba(0, 0, 0, 0.3)'
  },
  deleteBody: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    zIndex: 9999,
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    borderRadius: '10px'
  },
  textBody: {
    height: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerFormat: {
    margin: '0 40px',
    height: '125px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '28px',
    color: 'rgba(102, 125, 138, 1.0)',
  },
  promptFormat: {
    margin: '0 40px',
    height: '75px',
    display: 'flex',
    fontSize: '18px',
    color: 'rgba(155, 168, 176, 1.0)'
  }
};

const DeleteModal = (props) => {

  const { closeModal, confirmRemoval } = props;

  return (

    <div style={style.modalBackground}>

      <div style={style.deleteBody}>

        <div style={style.textBody}>

          <div style={style.headerFormat}>
            Delete Note
          </div>

          <div style={style.promptFormat}>
            Are you sure you want to delete this note?
          </div>

        </div>

        <ButtonBlock
          confirmRemoval={confirmRemoval}
          closeModal={closeModal}
        />

      </div>

    </div>

  );

}

export default DeleteModal;