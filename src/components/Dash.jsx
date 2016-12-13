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
      <div className="dashBg" style={{backgroundImage: `url(${this.props.background})`, backgroundSize: 'cover'}}>
        <div className="dash" id={this.props.location}>
          {
            this.props.widgets.map((widget)=>{
            return (<Widget
              key={widget.location}
              location={widget.location}
              name={widget.name}
              amount={this.props.widgets.length}
              />);
          })}
        </div>
      </div>)
  }
}

Dash.displayName = "Dash";

Dash.propTypes = {
  location: React.PropTypes.number,
  background: React.PropTypes.string,
  widgets: React.PropTypes.array
};

export default Dash;
