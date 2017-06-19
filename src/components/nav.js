import React from 'react';
// import DropdownMenu from 'react-dd-menu';
// import Categories from './categories';
import MenuButton from './MenuButton';
import NavMenu from './NavMenu';

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
      <NavMenu />
      <div className="site-overlay"></div>
    </div>
    );
  }
}

export default Nav;
