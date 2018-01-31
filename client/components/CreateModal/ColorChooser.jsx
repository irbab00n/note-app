import React from 'react';

import ChooserBox from './ChooserBox.jsx';

const style = {
  chooserBody: {
    height: '65px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooserRow: {
    margin: '0 45px',
    height: '50px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }
};

const ColorChooser = (props) => {

  const { availableColors, currentColor, setCurrentColor } = props;

  return (

    <div style={style.chooserBody}>
      <div style={style.chooserRow}>
        <ChooserBox 
          backgroundColor={availableColors['red']}
          onClick={() => setCurrentColor('red')}
          selected={currentColor === 'red'}
        />
        <ChooserBox 
          backgroundColor={availableColors['green']}
          onClick={() => setCurrentColor('green')}
          selected={currentColor === 'green'}
        />
        <ChooserBox 
          backgroundColor={availableColors['yellow']}
          onClick={() => setCurrentColor('yellow')}
          selected={currentColor === 'yellow'}
        />
        <ChooserBox 
          backgroundColor={availableColors['blue']}
          onClick={() => setCurrentColor('blue')}
          selected={currentColor === 'blue'}
        />
      </div>
    </div>

  );

}

export default ColorChooser;