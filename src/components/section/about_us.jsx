import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { NavLink } from 'react-router-dom';

class AboutUs extends Component {

    render(){
        return(
            <div className=" AboutUs   AboutBgRight" style={{ 
                backgroundImage: `url(/assets/images/bicads/Banner/about-us-design.png)` 
              }}> 
                <Container  className=" py-4  ">
                    <div className='text-center'>
                <h1 className='mainTextH1'> About Us </h1>
                        <h4>Our Digital Marketing Services Will Help You Build and Maintain Online Presence</h4>
                        </div>
                     <Row className='pb-4'>
                        <Col lg="5">
                        <Image src="/assets/images/bicads//Banner/About-us-image-with-shadow.png" alt={config.SITE_NAME} fluid  rounded/>
 
                                             </Col>
                       <Col lg="6"  className='py-4    animateBtn'>
                       
                       
<p>  We are a creative digital marketing agency providing first class web designing / development and digital marketing services.</p>
<p> Backed up with highly experienced web developers, Graphics Designers, S.E.O Experts &amp; Google Adword Professionals, you can be sure to get your online business sky rocketing in coming months. 

</p>

<NavLink  to="/about"   activeclassname="active" ><button type="button" class="btn btn-primary btn-md  draw mt-3">Read More</button></NavLink>
                                             </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AboutUs;