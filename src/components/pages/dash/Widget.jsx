import React from "react";
import Api from '../../../scripts/api';
require("normalize.css/normalize.css");
require("styles/Widget.css");

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.setSize = this.setSize.bind(this);
    this.calcSize = this.calcSize.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.dispatchEvent = this.dispatchEvent.bind(this);
  }

  componentDidMount() {
    this.calcSize();
    Api.getWidget(this.props.widget_id)
      .then((widget) => {
        this.setState({ widget: widget })
      })
  }

  dispatchEvent(data) {
    const iframe = document.getElementById(this.props.widget_id + this.props.location);
    if (iframe) {
      iframe.postMessage(JSON.stringify(data));
    }
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
    const multi = this.props.mini ? 2.4 : 24;
    return portion * multi + "vw";
  }

  getHeight(portion) {
    const multi = this.props.mini ? 4.8 : 48;
    return portion * multi + "vh";
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
      <iframe
      src={this.state.widget.remote_url}
      className={`${this.props.mini ? 'miniW' : 'w'}idget`}
      onMouseEnter={this.props.mini ? null : this.handleHover}
      onMouseLeave={this.props.mini ? null : this.handleHoverLeave}
      data-widget={this.props.widget_id}
      id={this.this.props.widget_id+this.props.location}
      style={{minWidth: this.state.width, minHeight: this.state.height }}>
      </iframe>
    );
  }
}

Widget.displayName = "Widget";

Widget.propTypes = {
  location: React.PropTypes.number,
  widget_id: React.PropTypes.string,
  amount: React.PropTypes.number
};

export default Widget;
