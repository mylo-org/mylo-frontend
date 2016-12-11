import React from "react";

import Widget from "./Widget";

class Dash extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "dash"
    }
  }
  render() {
    return (
      <div className="dash" id={this.props.location}>
      {this.props.widgets.map((widget)=>{
        return (<Widget
          size={1}
          location={widget.location}
          name={widget.name}
          />);
      })}
      </div>
    )
  }
}

Dash.displayName = "Dash";

Dash.propTypes = {
  location: React.PropTypes.number,
  background: React.PropTypes.string,
  widgets: React.PropTypes.array
};

export default Dash;
