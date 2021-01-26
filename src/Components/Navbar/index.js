import React from 'react'

import {Nav,NavLink,Bars,NavMenu} from "./NavbarElement"

const Navbar = () => {
    return (
        <>
         <Nav>
             <NavLink to="/">
                <img src={require('../../Images/Company_Logo.svg')}
                alt='Company'/>
             </NavLink>
             <Bars/>
             <NavMenu>
                 <NavLink to="/" activeStyle>
                     Home       
                 </NavLink>
                 <NavLink to="/about" activeStyle>
                     About
                 </NavLink>
                 <NavLink to="/products" activeStyle>
                     Products
                 </NavLink>
                 <NavLink to="/contact-us" activeStyle>
                     Contact Us
                 </NavLink>
             </NavMenu>

         </Nav>
        </>
    )
}

export default Navbar
