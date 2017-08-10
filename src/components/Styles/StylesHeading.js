import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return(state)
}

class StylesHeading extends Component {

  render() {
    return (
      <div className="header-container light">
        <div className="content">
            <h1>{this.props.styles.style}<span className="hide-content"> styles</span></h1>
        </div>
    </div>
    )
  };
};

export default connect(mapStateToProps)(StylesHeading);
