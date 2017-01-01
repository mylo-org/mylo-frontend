import React from "react";
import Widget from "./Widget";


class Dash extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "dash"
    };
    this.setActive = this.setActive.bind(this);
  }

  renderDash() {
    return (<div className={`${this.props.active ? 'd' : 'miniD'}ash`}>
          {
            this.props.widgets.map((widget)=>{
            return (<Widget
              key={widget.location}
              location={widget.location}
              name={widget.name}
              amount={this.props.widgets.length}
              mini={!this.props.active}
              />);
          })}
        </div>)
  }

  getTopDiff() {
    return 40;
  }


  getMiniSize() {
    return 15;
  }

  getStyles() {
    if (this.props.active === true) {
      return {};
    } else if (this.props.active === false) {
      const total = 100;
      const nonActiveAmount = this.props.amount - 1;
      let eachSize = total / nonActiveAmount;
      const topDiff = (eachSize * this.props.location - 12) + "vh";
      return { top: topDiff }
    }
  }
  setActive() {
    this.props.cb(this.props.location);
  }

  render() {
    return (
      <div className={this.props.active ? "dashBg" : 'miniDashCont'} style={this.getStyles()} onClick={this.props.active ? null : this.setActive}>
      {this.state.page === "dash" ?
        this.renderDash() : this.renderSettings()
    }
      </div>)
  }
}

Dash.displayName = "Dash";

Dash.propTypes = {
  location: React.PropTypes.number,
  widgets: React.PropTypes.array,
  active: React.PropTypes.bool,
  amount: React.PropTypes.number,
  cb: React.PropTypes.func
};

export default Dash;
