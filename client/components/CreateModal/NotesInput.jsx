import React from 'react';

const style = {
  notesBody: {
    height: '500px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    margin: '0 50px',
    height: '100%',
    width: '100%',
    resize: 'none',
    fontSize: '16px',
    outline: 'none',
    border: 'none',
    color: 'rgba(102, 125, 138, 1.0)'
  }
};

const NotesInput = (props) => {

  const { updateNotes, currentNotes } = props;

  return (

    <div style={style.notesBody}>
      <textarea 
        style={style.textArea}
        onChange={(e) => updateNotes(e)}
        placeholder="Just start typing here"
        value={currentNotes}
      />
    </div>

  );

};

export default NotesInput;