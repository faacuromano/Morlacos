import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink
} from 'reactstrap';

import "./NavBar.css"

function Example(args) {

  return (
<>
    <Navbar className='navbar'  dark >

        <NavbarBrand href="/">
            <h1 className='Logo'> Morlacos </h1>
        </NavbarBrand>

        <div className='links'>
          
        <NavbarBrand className='linkSingUp' >
            <NavLink href="#">
            Register
            </NavLink>
        </NavbarBrand>
        
        <NavbarBrand className='link'>
            <NavLink  href="#artworks">
            Artworks
            </NavLink>
        </NavbarBrand>
        
        <NavbarBrand className='link' >
            <NavLink href="https://github.com/reactstrap/reactstrap">
            Store
            </NavLink>

        </NavbarBrand>
                <NavbarBrand className='link' >
                    
            <NavLink href="#contact">
            Contact
            </NavLink>
        </NavbarBrand>
        </div>

    </Navbar>
</>
  );
}

export default Example;