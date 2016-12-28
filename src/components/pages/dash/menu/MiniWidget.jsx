import React from 'react';
import api from '../../../../scripts/api';
/* eslint-disable */
const API = new api();

require("normalize.css/normalize.css");
require("styles/mini/MiniWidget.css");

class MiniWidget extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.calcSize();
  }


  getWidth(portion) {
    return portion * 2.4 + "vw";
  }

  getHeight(portion) {
    return portion * 2.4 + "vh";
  }

  setSize(height, width) {
    height = this.getHeight(height);
    width = this.getWidth(width);
    this.setState({ height: height, width: width });
  }

  calcSize() {
    console.log(`Recalculating MiniWidget sizes`);
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
      //TODO: Re-add "backgroundImage: `url(${API.getServiceImg(this.props.name)})`," to the style elem below. Make the route on S3
      <div className="miniWidget" data-service={this.props.name} style={{minWidth: this.state.width, minHeight: this.state.height}}>
      </div>
    );
  }
}

MiniWidget.displayName = "MiniWidget";

export default MiniWidget;
