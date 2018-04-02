import React from 'react';

import Navbar from './components/Navbar.jsx';
import Notecard from './components/Notecard/index.jsx';
import CreateModal from './components/CreateModal/index.jsx';
import DeleteModal from './components/DeleteModal/index.jsx';

import defaultCards from './defaultCards';

const style = {
  appBody: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardGrid: {
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'grid',
    width: '100%',
    maxWidth: '1500px',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 350px)',
    gridGap: '25px',
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createModal: false,
      deleteModal: false,
      notecards: defaultCards,
      actionIndex: ''  // This value represents the index of the card either being edited or deleted
    };
    this.newCardOpener = this.newCardOpener.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addNotecard = this.addNotecard.bind(this);
    this.updateNotecard = this.updateNotecard.bind(this);
    this.editNotecard = this.editNotecard.bind(this);
    this.removeNotecard = this.removeNotecard.bind(this);
    this.confirmRemoval = this.confirmRemoval.bind(this);
  }

  newCardOpener() {
    this.setState({
      createModal: true
    });
  }

  closeModal() {
    // toggle off all modals, clear the action index
    this.setState({
      createModal: false,
      deleteModal: false,
      actionIndex: ''
    });
  }

  updateNotecard(index, card) {
    // create a new copy of the notecards
    let notecards = this.state.notecards.slice(0);
    // overwrite the card at the provided index, with the supplied card
    notecards[index] = card;
    // close the createModal, update the notecards, and clear the actionIndex
    this.setState({
      createModal: false,
      notecards,
      actionIndex: ''
    });
  }

  addNotecard(card) {
    // create a copy of the array and place the card coming in at the beginning
    let notecards = [card].concat(this.state.notecards.slice(0));
    // close the createModal and set the notecards
    this.setState({
      createModal: false,
      notecards
    });
  }

  editNotecard(index) {
    // set the action index representing the index of the card being edited and open the createModal
    this.setState({
      actionIndex: index,
      createModal: true
    });
  }

  removeNotecard(index) {
    // set the action index representing the index of the card being removed and open the deleteModal
    this.setState({
      actionIndex: index,
      deleteModal: true
    });
  }

  confirmRemoval() {
    let { actionIndex, notecards } = this.state;
    notecards.splice(actionIndex, 1);
    this.setState({
      deleteModal: false,
      notecards,
      actionIndex: ''
    });
  }

  render() {

    const { createModal, deleteModal, notecards, actionIndex } = this.state;

    console.log(notecards);

    return (

      <div style={style.appBody}>

        <Navbar 
          newCardOpener={this.newCardOpener}
        />

        <div style={style.cardGrid}>

          {
            notecards.map((card, index) => {
              return (
                <Notecard
                  key={`notecard${index}`}
                  index={index}
                  stripeColor={card.stripeColor || ''}
                  title={card.title || ''}
                  notes={card.notes || ''}
                  editNotecard={this.editNotecard}
                  removeNotecard={this.removeNotecard}
                />
              );
            })
          }

        </div>


        {
          createModal ?
            <CreateModal
              notecards={notecards}
              addNotecard={this.addNotecard}
              updateNotecard={this.updateNotecard}
              closeModal={this.closeModal}
              actionIndex={actionIndex}
            /> :
            <div></div>  // stub with empty div
        }

        {
          deleteModal ?
            <DeleteModal
              closeModal={this.closeModal}
              confirmRemoval={this.confirmRemoval}
            /> :
            <div></div>  // stub with empty div
        }


      </div>

    );

  }
}