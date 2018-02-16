import React from 'react';
import { connect } from 'react-redux';

const StylesHeading = ({ style }) => (
  <div className="header-container light">
    <div className="content">
      <h1>
        {this.props.styles.style}
        <span className="hide-content"> styles</span>
      </h1>
    </div>
  </div>
);

const mapStateToProps = ({ styles: { style } }) => ({
  style
});

export default connect(mapStateToProps)(StylesHeading);
