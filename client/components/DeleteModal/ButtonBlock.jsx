import React from 'react';

import Button from '../Button.jsx';

const style = {
  blockBody: {
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 250, 250, 1.0)',
    borderRadius: '0 0 10px 10px'
  },
  buttonRow: {
    margin: '0 40px',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

const ButtonBlock = (props) => {

  const { closeModal, confirmRemoval } = props;

  return (

    <div style={style.blockBody}>

      <div style={style.buttonRow}>

        <Button 
          margin={'0 70px 0 0'}
          fontSize={'18px'}
          label={'Cancel'}
          backgroundColor={'rgba(210, 211, 212, 1.0)'}
          hoverColor={'rgba(190, 191, 192, 1.0)'}
          clickedColor={'rgba(160, 161, 162, 1.0)'}
          onClick={closeModal}
        />

        <Button 
          margin={'0 0 0 70px'}
          fontSize={'18px'}
          label={'Delete'}
          onClick={confirmRemoval}
        />

      </div>

    </div>

  );

};

export default ButtonBlock;
