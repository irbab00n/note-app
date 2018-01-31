import React from 'react';

import Button from './Button.jsx';

const style = {
  navbarBody: {
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(31, 37, 50, 1.0)',
    color: 'rgba(249, 249, 251, 1.0)'
  },
  titleFormat: {
    marginLeft: '100px',
    fontSize: '44px',
    color: 'rgba(255, 59, 48, 1.0)',
    WebkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    MozUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none',
  }
};

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { newCardOpener } = this.props;

    return (

      <div style={style.navbarBody}>
        <span style={style.titleFormat}>
          KNOWTELY
        </span>
        <Button
          height={'50px'}
          width={'175px'}
          margin={'0 100px 0 0'}
          fontSize={'18px'}
          label={'+ Add Note'}
          onClick={newCardOpener}
        />
      </div>

    );

  }
}