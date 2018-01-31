import React from 'react';

const style = {
  titleBody: {
    height: '75px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBody: {
    margin: '0 50px',
    height: '100%',
    width: '100%',
    color: 'rgba(67, 103, 118, 1.0)',
    fontSize: '24px',
    fontStyle: 'italic',
    outline: 'none',
    border: 'none',
  }
};

const TitleInput = (props) => {

  const { updateTitle, currentTitle } = props;

  return (

    <div style={style.titleBody}>
      <input 
        style={style.inputBody}
        onChange={(e) => updateTitle(e)}
        placeholder="Untitled"
        value={currentTitle}
      />
    </div>

  );

}

export default TitleInput;