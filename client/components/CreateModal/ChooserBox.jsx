import React from 'react';

const style = {
  boxBody: {
    margin: '0 5px',
    height: '24px',
    width: '24px',
    borderRadius: '2px',
    cursor: 'pointer'
  },
  selected: {
    border: '2px solid rgba(170, 177, 181, 1.0)'
  }
};

const ChooserBox = (props) => {


  const { backgroundColor, selected, onClick } = props;

  return (

    <div 
      style={
        Object.assign(
          {backgroundColor: backgroundColor},
          style.boxBody,
          selected && style.selected
        )
      }
      onClick={onClick}
    >
    </div>

  );

}

export default ChooserBox;