import React, { FunctionComponent, useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { ABOUT, HOME, POSTS } from "../../constants/route-paths";

const Header: FunctionComponent = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to={ HOME }>symfony app</Link>
        <NavbarToggler onClick={ toggleNavbar } />
        <Collapse isOpen={ isNavbarOpen } navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                exact={ true }
                className="nav-link"
                to={ HOME }
              >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                exact={ true }
                className="nav-link"
                to={ ABOUT }
              >
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                exact={ true }
                className="nav-link"
                to={ POSTS }
              >
                Posts
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
