import React from "react";

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "widget",
      size: this.props.size || 1
    }
  }
  render() {
    return (
      <div className="widget" data-service={this.props.name} style={{minWidth: this.state.size + "vw"}}>
      </div>
    );
  }
}

Widget.displayName = "Widget";

Widget.propTypes = {
  location: React.PropTypes.number,
  name: React.PropTypes.string,
  size: React.PropTypes.number
};

export default Widget;
