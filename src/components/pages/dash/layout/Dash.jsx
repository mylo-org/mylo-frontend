import React from "react";
import Widget from "./Widget";

class Dash extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "dash"
    }
  }
  renderDash() {
    return (<div className="dash" id={this.props.location}>
          {
            this.props.widgets.map((widget)=>{
            return (<Widget
              key={widget.location}
              location={widget.location}
              name={widget.name}
              amount={this.props.widgets.length}
              />);
          })}
        </div>)
  }

  render() {
    return (
      <div className="dashBg">
      {this.state.page === "dash" ?
        this.renderDash() : this.renderSettings()
    }
      </div>)
  }
}

Dash.displayName = "Dash";

Dash.propTypes = {
  location: React.PropTypes.number,
  widgets: React.PropTypes.array
};

export default Dash;
