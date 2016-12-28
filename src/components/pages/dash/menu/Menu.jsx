import React from 'react';
import MiniDash from "./MiniDash.jsx";

require("normalize.css/normalize.css");
require("styles/mini/menu.css");

const MENU_DURATION = 3000;
// const MENU_DURATION =-1;

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
    this.handleHover = this.handleHover.bind(this);
    this.calcWidth = this.calcWidth.bind(this);
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    console.log(`Setting timer for ${MENU_DURATION} ms`);
    this.timer = setTimeout(() => {
      this.setState({ show: false })
    }, MENU_DURATION)
  }

  handleHover() {
    console.log('Hover over menu');
    clearTimeout(this.timer);
    this.setState({ show: true });
    this.setTimer()
  }

  renderMenuContent() {
    // console.log(`Told to show menu`);
    return this.props.dashboards.map((dash) => {
      return <MiniDash key={dash.location} data={dash}
      />
    })
  }

  calcWidth() {
    console.log(`Told ${this.state.show === true ? '' : 'not'} to show menu`);
    if (this.state.show === true) {
      return null;
    } else {
      return `1px !important`
    }
  }

  render() {
    return (<div className={`menu ${this.state.show === true ? null : 'smallMenu'}`} onMouseEnter={this.handleHover}>{this.renderMenuContent()}</div>)
  }
}

export default Menu;
