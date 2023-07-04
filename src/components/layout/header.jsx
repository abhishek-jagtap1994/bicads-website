import React, { Component }  from 'react';
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';
import config from '../../constant';
   class Header extends Component {
    
    render(){
    return(
        <Navbar collapseOnSelect expand="lg" className='justify-content-center' >
      <Container >
        <Navbar.Brand  > 
             <NavLink to="/"   ><Image src="/assets/images/bicads/bicads_logo_rectangle.png" alt={config.SITE_NAME}  fluid/>  </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="  justify-content-center">
             
              
          </Nav>
          <Nav className=' '>
          <NavLink to="/about"   activeclassname="active">About</NavLink>

          <NavDropdown title="Design and Development" id="collasible-nav-dropdown"  >
              <NavDropdown.Item >
                <NavLink to="/website-development-services"   activeclassname="active">Website Design </NavLink></NavDropdown.Item>
              <NavDropdown.Item  >
                <NavLink to="/e-commerce-website-development"   activeclassname="active">Ecommerce Website </NavLink>
                </NavDropdown.Item>
              <NavDropdown.Item  >      
        <NavLink to="/crm-cms-development-services"   activeclassname="active">CRM/CMS Development</NavLink></NavDropdown.Item>
              <NavDropdown.Item >    <NavLink to="/mobile-app-development-company"   activeclassname="active">Mobile App Development</NavLink></NavDropdown.Item>
              <NavDropdown.Item  > 
                  <NavLink to="/graphic-design-services"   activeclassname="active">Graphic Design</NavLink> </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Digital Marketing" id="collasible-nav-dropdown"  >
              <NavDropdown.Item  ><NavLink to="/social-media-marketing-company"   activeclassname="active">Social Media Marketing</NavLink> </NavDropdown.Item>
              <NavDropdown.Item  >
              <NavLink to="/search-engine-optimization-company"   activeclassname="active">Search Engine Optimization</NavLink>               </NavDropdown.Item>
              <NavDropdown.Item  > 
                <NavLink to="/ppc-pay-per-click-marketing-services"   activeclassname="active">Pay-Per-Click</NavLink>
                   </NavDropdown.Item>

                   <NavDropdown.Item  > 
                <NavLink to="/content-marketing-services"   activeclassname="active">Content Marketing</NavLink>
                   </NavDropdown.Item>

                   <NavDropdown.Item  > 
                <NavLink to="/branding-services"   activeclassname="active">Branding Services</NavLink>
                   </NavDropdown.Item>
                   <NavDropdown.Item  > 
                <NavLink to="/digital-pr"   activeclassname="active">Digital PR</NavLink>
                   </NavDropdown.Item>
                   <NavDropdown.Item  > 
                <NavLink to="/wikipedia-page-creation-service"   activeclassname="active">Wikipedia Page Creation</NavLink>
                   </NavDropdown.Item>          
            </NavDropdown>

              <a href="https://bicads.com/blog/" target="_blank">Blog</a>
              <NavLink to="/contact"   activeclassname="active">Contact</NavLink>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           );
}

  }
export default Header;
