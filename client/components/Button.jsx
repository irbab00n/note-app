import React from 'react';

const style = {
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    WebkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    MozUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    WebkitTransition: '0.2s'
  },
  bodyHovered: {
    color: 'rgba(251, 251, 253, 1.0)'
  },
  bodyClicked: {
    color: 'rgba(255, 255, 255, 1.0)'
  },
  bodyDisabled: {

  }
}

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    /* 
      This is currently causing a warning in the dev version of React.
      Reason: when I open the modal to either create or delete, and the cancel button is clicked,
      the buttons are unmounting.  Because I have delayed the next setState by 100ms, and the fact
      that the buttons are unmounting, this is causing the warning to pop up in the console
    */
    let { onClick = ()=>{} } = this.props;  // stub to an empty function if none passed in
    this.setState({clicked: true}, () => {
      onClick();
      setTimeout(() => {
        this.setState({clicked: false})
      }, 100);
    });
  }

  render() {

    const { hovered, clicked } = this.state;
    const {
      height = '50px',  // Default height is 50px
      width = '100px',  // Default width is 100px
      margin = '0 0 0 0',  // Default margin of button is 0
      label = '',  // Default label is an empty string
      fontSize = '16px',  // Default font size is 16px
      backgroundColor = 'rgba(120, 170, 120, 1.0)',  // Default background is a turquoise blue
      hoverColor = 'rgba(70, 150, 70, 1.0)',  // Default slightly darker than the base color
      clickedColor = 'rgba(40, 120, 40, 1.0)',  // Default slightly darker than the hover color
      disabledColor = 'rgba(120, 170, 120, 0.5)', // Slightly opaque background color
      color = 'rgba(255, 255, 255, 1.0)',  // Default text color if none provided
      disabled = false
    } = this.props;

    return (

      <div 
        style={
          Object.assign(
            {margin: margin, fontSize: fontSize, height: height, width: width, backgroundColor: backgroundColor, color: color},
            style.body,
            hovered && Object.assign(style.bodyHovered, {backgroundColor: hoverColor}),
            clicked && Object.assign(style.bodyClicked, {backgroundColor: clickedColor}),
            disabled && {backgroundColor: disabledColor, cursor: 'not-allowed'}
          )
        }
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        onClick={disabled ? () => {} : this.clickHandler}
      >
        {label}
      </div>

    );

  }
}