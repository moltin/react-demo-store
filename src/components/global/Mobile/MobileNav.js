import React from 'react';
import MenuButton from './MenuButton';
import MobileNavMenu from './MobileNavMenu';
import { connect } from 'react-redux';

function mapStatetoProps(state) {
  return state;
}

class Nav extends React.Component {
  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = () => {
    this.setState({ isMenuOpen: false });
  };

  click = () => {
    console.log('You clicked an item');
  };

  render() {
    return (
      <div>
        <MenuButton />
        <MobileNavMenu />
        <div className="site-overlay" />
      </div>
    );
  }
}

export default connect(mapStatetoProps)(Nav);
