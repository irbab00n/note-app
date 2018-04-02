import React from 'react';

import ColorChooser from './ColorChooser.jsx';
import TitleInput from './TitleInput.jsx';
import NotesInput from './NotesInput.jsx';
import ButtonBlock from './ButtonBlock.jsx';

const availableColors = {
  red: 'rgba(250, 169, 176, 1.0)',
  green: 'rgba(181, 236, 209, 1.0)',
  yellow: 'rgba(251, 219, 174, 1.0)',
  blue: 'rgba(174, 204, 251, 1.0)'
};

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
  creatorBody: {
    position: 'absolute',
    top: '56%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '750px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '725px',
    zIndex: 9999,
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    borderRadius: '10px'
  },
  stripeColor: {
    height: '10px',
    width: '100%',
    borderRadius: '10px 10px 0 0',
    WebkitTransition: '0.2s'
  }
};

export default class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'red',
      title: '',
      notes: '',
      edited: false
    };
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.buildNotecard = this.buildNotecard.bind(this);
  }

  componentWillMount() {
    let { actionIndex, notecards } = this.props;
    // if the actionIndex isn't the default empty string, we need to populate the fields in the modal
    if (actionIndex !== '') {
      this.setState({
        currentColor: notecards[actionIndex].currentColor,
        title: notecards[actionIndex].title,
        notes: notecards[actionIndex].notes.join('\n')
      });
    }
  }

  setCurrentColor(color) {
    this.setState({
      currentColor: color,
      edited: true
    });
  }

  updateTitle(e, title) {
    let { edited } = this.state;
    if (edited && e.target.value === '') {
      this.setState({
        edited: false,
        title: e.target.value || title || ''
      });
    }
    if (!edited) {
      this.setState({
        edited: true,
        title: e.target.value || title || ''
      });
    } else {
      this.setState({
        title: e.target.value || title || ''
      });
    }
  }

  updateNotes(e, notes) {
    let { edited } = this.state;
    if (edited && e.target.value === '') {
      this.setState({
        edited: false,
        notes: e.target.value || notes || ''
      });
    }
    if (!edited) {
      this.setState({
        edited: true,
        notes: e.target.value || notes || ''
      });
    } else {
      this.setState({
        notes: e.target.value || notes || ''
      });
    }
  }

  buildNotecard() {
    let { currentColor, title, notes } = this.state;
    let { addNotecard, updateNotecard, actionIndex } = this.props;
    let notesCharacters = notes.split('\n');
    if (actionIndex !== '') {
      let updatedCard = {
        currentColor,
        stripeColor: availableColors[currentColor],
        notes: notesCharacters,
        title,
      };
      updateNotecard(actionIndex, updatedCard);
    } else {
      let newCard = {
        currentColor,
        stripeColor: availableColors[currentColor],
        notes: notesCharacters,
        title,
      };
      addNotecard(newCard);
    }
  }

  render() {

    const { currentColor, title, notes, edited } = this.state;
    const { closeModal, actionIndex } = this.props;

    let disableButton = title === '' || notes === '';

    return (

      <div style={style.modalBackground}>

        <div style={style.creatorBody}>

          <div style={
            Object.assign(
              {backgroundColor: availableColors[currentColor]},
              style.stripeColor
            )
          }/>

          <ColorChooser
            availableColors={availableColors}
            currentColor={currentColor}
            setCurrentColor={this.setCurrentColor}
          />

          <TitleInput
            currentTitle={title}
            updateTitle={this.updateTitle}
          />

          <NotesInput 
            currentNotes={notes}
            updateNotes={this.updateNotes}
          />

          <ButtonBlock
            actionIndex={actionIndex}
            disabled={!edited || disableButton}
            closeModal={closeModal}
            addNotecard={this.buildNotecard}
          />

        </div>

      </div>

    );

  }
}