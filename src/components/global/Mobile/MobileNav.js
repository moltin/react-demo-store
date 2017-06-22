import React from 'react';
import MenuButton from '../MenuButton';
import MobileNavMenu from './MobileNavMenu';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

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
      <div className="site-overlay"></div>
    </div>
    );
  }
}

export default Nav;
