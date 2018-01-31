import React from 'react';

const style = {
  blockBody: {
    width: '125px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockRow: {
    height: '30px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFormat: {
    margin: '5px',
    cursor: 'pointer'
  }
}

// NOTE:  SVG's in this component were sourced from material.io/icons

export default class OptionsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editHover: false,
      deleteHover: false
    };
  }

  render() {

    const { editHover, deleteHover } = this.state;
    const { index, editNotecard, removeNotecard } = this.props;

    let editFill = editHover ? 'rgba(102, 196, 204, 1.0)' : 'rgba(201, 202, 205, 1.0)';
    let deleteFill = deleteHover ? 'rgba(102, 196, 204, 1.0)' : 'rgba(201, 202, 205, 1.0)';

    return (

      <div style={style.blockBody}> 

        <div style={style.blockRow}>

          <div
            style={style.iconFormat}
            onMouseEnter={() => this.setState({editHover: true})}
            onMouseLeave={() => this.setState({editHover: false})}
            onClick={() => editNotecard(index)}
          >
            <svg
              style={{WebkitTransition: '0.2s'}}
              fill={editFill}
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>

          <div
            style={style.iconFormat}
            onMouseEnter={() => this.setState({deleteHover: true})}
            onMouseLeave={() => this.setState({deleteHover: false})}
            onClick={() => removeNotecard(index)}
          >
            <svg
              style={{WebkitTransition: '0.2s'}}
              fill={deleteFill}
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>

        </div>

      </div>

    );

  }
}