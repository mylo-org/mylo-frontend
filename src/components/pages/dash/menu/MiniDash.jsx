import React from 'react';
import MiniWidget from './MiniWidget.jsx';

class MiniDash extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.renderDash = this.renderDash.bind(this);
  }

  renderDash() {
    return (<a href={`#${this.props.data.location}`} className="miniDash" id={this.props.data.location}>
          {
            this.props.data.widgets.map((widget)=>{
            return (<MiniWidget
              key={widget.location}
              location={widget.location}
              name={widget.name}
              amount={this.props.data.widgets.length}
              />);
          })}
        </a>)
  }

  render() {
    return (
      <div className="miniDashCont">
        {this.renderDash()}
      </div>)
  }

}

export default MiniDash;
