import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from '../../routes';

const BsNavLink = ({ route, title }) => (
    <Link route={route}>
        <a className="nav-link port-navbar-link">{title}</a>
    </Link>
);

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Navbar className="port-navbar port-default absolute" color="transparent" dark light expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">ahmetilhann</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/" title="Home" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/portfolios" title="Portfolios" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/cv" title="Cv" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/blogs" title="Blog" />
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
