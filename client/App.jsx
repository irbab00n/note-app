import React from 'react';

import Navbar from './components/Navbar.jsx';
import Notecard from './components/Notecard/index.jsx';
import CreateModal from './components/CreateModal/index.jsx';
import DeleteModal from './components/DeleteModal/index.jsx';

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
      notecards: [],
      actionIndex: ''  // This value represents the index of the card either being edited or deleted
    };
    this.newCardOpener = this.newCardOpener.bind(this);
    this.modalCloser = this.modalCloser.bind(this);
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

  modalCloser(modalName) {
    switch(modalName) {
      case 'create':
        this.setState({
          createModal: false,
          actionIndex: ''
        });
        break;
      case 'delete':
        this.setState({
          deleteModal: false,
          actionIndex: ''
        });
        break;
    }
  }

  updateNotecard(index, card) {
    let notecards = this.state.notecards.slice(0);
    notecards[index] = card;
    this.setState({
      createModal: false,
      notecards,
      actionIndex: ''
    });
  }

  addNotecard(card) {
    let notecards = [card].concat(this.state.notecards.slice(0));
    this.setState({
      createModal: false,
      notecards
    });
  }

  editNotecard(index) {
    this.setState({
      actionIndex: index,
      createModal: true
    });
  }

  removeNotecard(index) {
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
              modalCloser={this.modalCloser}
              actionIndex={actionIndex}
            /> :
            <div></div>  // stub with empty div
        }

        {
          deleteModal ?
            <DeleteModal
              modalCloser={this.modalCloser}
              confirmRemoval={this.confirmRemoval}
            /> :
            <div></div>  // stub with empty div
        }


      </div>

    );

  }
}