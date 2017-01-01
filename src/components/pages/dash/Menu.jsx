import React from 'react';


require("normalize.css/normalize.css");
require("styles/menu.css");

const MENU_DURATION = 3000;

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

  hideMinis() {
    if (this.state.show === false) {
      console.log(`Hiding minis`)
      let minis = document.getElementsByClassName('miniDashCont');
      for (var i = 0; i < minis.length; i++) {
        if (minis[i].className.indexOf("hidden") === -1) minis[i].className += " hidden";
      }
    }
  }

  showMinis() {
    if (this.state.show === true) {
      console.log(`Showing minis`)
      let minis = document.getElementsByClassName('miniDashCont');
      for (var i = 0; i < minis.length; i++) {
        minis[i].className = minis[i].className.replace("hidden", "");
      }
    }
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

  calcWidth() {
    console.log(`Told ${this.state.show === true ? '' : 'not'} to show menu`);
    if (this.state.show === true) {
      return null;
    } else {
      return `1px !important`
    }
  }

  render() {
    this.state.show ? this.showMinis() : this.hideMinis();
    return (<div className={`menu ${this.state.show === true ? '' : 'smallMenu'}`} onMouseEnter={this.handleHover}></div>)
  }
}

export default Menu;
