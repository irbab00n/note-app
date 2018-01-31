import React from 'react';

import OptionsBlock from './OptionsBlock.jsx';

const style = {
  cardBody: {
    height: '300px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px'
  },
  stripeBody: {
    height: '8px',
    width: '100%',
    borderRadius: '5px 5px 0 0'
  },
  titleBody: {
    height: '72px',
    width: '100%',
    color: 'rgba(67, 103, 118, 1.0)',
    display: 'flex',
    alignItems: 'center',
    justiyContent: 'space-between',
    borderBottom: '2px solid rgba(246, 246, 246, 1.0)',
  },
  titleText: {
    margin: '0 0 0 25px',
    height: '100%',
    width: '225px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    overflowX: 'scroll'
  },
  notesContainer: {
    marginTop: '17px',
    height: '210px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll'
  },
  notesFormat: {
    margin: '1px 25px',
    fontSize: '16px',
    color: 'rgba(155, 168, 176, 1.0)'
  }
};

export default class Notecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { index, stripeColor, title, notes, editNotecard, removeNotecard } = this.props;

    return (

      <div style={style.cardBody}>

        <div style={
          Object.assign(
            {WebkitTransition: '0.4s', backgroundColor: stripeColor},
            style.stripeBody
          )
        }/>

        <div style={style.titleBody}>

          <div style={style.titleText}>
            {title}
          </div>

          <OptionsBlock 
            index={index}
            editNotecard={editNotecard}
            removeNotecard={removeNotecard}
          />

        </div>

        <div style={style.notesContainer}>
          {
            notes.map((note, index) => {
              return (
                <div 
                  style={style.notesFormat}
                  key={`${title}Notecard${index}`}
                >
                  {note}
                  <br/>
                </div>
              );
            })
          }
        </div>

      </div>

    );

  }
}