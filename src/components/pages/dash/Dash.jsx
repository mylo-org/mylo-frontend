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
    return (<div className={`${this.props.active ? 'd' : 'miniD'}ash`} id={this.props.location}>
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

  setActive() {
    this.props.cb(this.props.location);
  }

  render() {
    return (
      <div className={this.props.active ? "dashBg" : 'miniDashCont'} onClick={this.props.active ? null : this.setActive}>
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
  cb: React.PropTypes.func
};

export default Dash;
