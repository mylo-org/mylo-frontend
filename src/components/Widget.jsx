import React from "react";
require("normalize.css/normalize.css");
require("styles/Widget.css");

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "widget"
    }
  }

  componentDidMount() {
    this.calcSize();
  }

  getWidth(portion) {
    return portion * 24 + "vw";
  }

  getHeight(portion) {
    return portion * 45 + "vh";
  }

  setSize(height, width) {
    console.log(`Setting size H:${height} W:${width}`);
    this.setState({ height: height, width: width });
  }

  calcSize() {
    console.log(`Recalculating widget sizes`);
    switch (this.props.amount) {
      case 1:
        this.setSize(this.getHeight(2), this.getWidth(3));
        break;
      case 2:
        this.setSize(this.getHeight(2), this.getWidth(1.5));
        break;
      case 3:
        this.setSize(this.getHeight(2), this.getWidth(1))
        break;
      case 4:
        if (this.props.location >= 2) {
          this.setSize(this.getHeight(1), this.getWidth(1))
        } else {
          this.setSize(this.getHeight(1), this.getWidth(3));
        }
        break;
      case 5:
        if (this.props.location >= 2) {
          this.setSize(this.getHeight(1), this.getWidth(1));
        } else {
          this.setSize(this.getHeight(1), this.getWidth(1.5));
        }
        break;
      case 6:
        this.setSize(this.getHeight(1), this.getWidth(1));
        break;
      default:
        console.error(`Unknown location/amount? Location: ${this.props.location}. Amount: ${this.props.amount}`);
        this.setSize(this.getHeight(1), this.getWidth(1));
    }
  }

  render() {
    return (
      <div className="widget" data-service={this.props.name} style={{minWidth: this.state.width, minHeight: this.state.height }}>
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
