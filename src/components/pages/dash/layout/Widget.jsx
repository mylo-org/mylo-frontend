import React from "react";
require("normalize.css/normalize.css");
require("styles/Widget.css");

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "widget",
      hover: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.setSize = this.setSize.bind(this);
    this.calcSize = this.calcSize.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
  }

  componentDidMount() {
    this.calcSize();
  }

  handleHover() {
    // console.log(`Noticing hover over widget in position ${this.props.location}`);
    this.setState({ hover: true });
  }

  handleHoverLeave() {
    // console.log(`Noticing hover leave of widget in position ${this.props.location}`)
    this.setState({ hover: false });
  }

  getWidth(portion) {
    return portion * 24 + "vw";
  }

  getHeight(portion) {
    return portion * 45 + "vh";
  }

  setSize(height, width) {
    height = this.getHeight(height);
    width = this.getWidth(width);
    console.log(`Setting size H:${height} W:${width}`);
    this.setState({ height: height, width: width });
  }

  calcSize() {
    console.log(`Recalculating widget sizes`);
    if (this.state.hover === true) {
      switch (this.props.amount) {
        case 1:
          this.setSize(2, 3);
          break;
        case 2:
          this.setSize(2.5, 3)
          break;
        case 3:
          this.setSize(2, 3);
          break;
        case 4:
          if (this.props.location >= 2) {
            //do tihs
          } else {
            //do this
          }
      }
    } else {
      switch (this.props.amount) {
        case 1:
          this.setSize(2, 3);
          break;
        case 2:
          this.setSize(2, 1.5);
          break;
        case 3:
          this.setSize(2, 1)
          break;
        case 4:
          if (this.props.location >= 2) {
            this.setSize(1, 1)
          } else {
            this.setSize(1, 3);
          }
          break;
        case 5:
          if (this.props.location >= 2) {
            this.setSize(1, 1);
          } else {
            this.setSize(1, 1.5);
          }
          break;
        case 6:
          this.setSize(1, 1);
          break;
        default:
          console.error(`Unknown location/amount? Location: ${this.props.location}. Amount: ${this.props.amount}`);
          this.setSize(1, 1);
      }
    }
  }

  render() {
    return (
      <div className="widget" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverLeave} data-service={this.props.name} style={{minWidth: this.state.width, minHeight: this.state.height }}>
      </div>
    );
  }
}

Widget.displayName = "Widget";

Widget.propTypes = {
  location: React.PropTypes.number,
  name: React.PropTypes.string,
  amount: React.PropTypes.number
};

export default Widget;
