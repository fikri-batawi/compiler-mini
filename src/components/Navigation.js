import {React,useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">My Teeeam</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#team">Teams</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#compiler">Compiler</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation
