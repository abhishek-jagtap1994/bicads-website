import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import {Fade} from 'react-awesome-reveal'
import { NavLink } from 'react-router-dom';

class Portfolio extends Component {

    render(){
        return(
            <div className='Portfolio'>
                <Container className=" py-5   text-center">
                <h3 className='mainTextH1'> Our Portfolio </h3>

                <h2>We Have Some Good Work To Showcase</h2>
                
                

                   
                  
                 <Row   className='text-center pt-4'> 
                 <Col lg="2">   
                                             
                                             <Fade direction='up'  delay="50" triggerOnce="true" className='firstCircle'>
<Image src="/assets/images/bicads-images/portfolio/Circle--Small-design.png" alt={config.SITE_NAME} fluid   />
</Fade>  
                    </Col>
                    <Col lg="8" >
                        
                    <div className='portfolioCircle'>
                    <NavLink to="/website-development-services"   activeclassname="active">
                    <Image src="/assets/images/bicads-images/portfolio/Website.jpg" alt={config.SITE_NAME} fluid   />
                    </NavLink>
                    <NavLink to="/graphic-design-services"   activeclassname="active">
                    <Image src="/assets/images/bicads-images/portfolio/Logo.jpg" alt={config.SITE_NAME} fluid   />
                    </NavLink>

                    </div>
                    {/* <Image src="/assets/images/bicads-images/portfolio/Social-Media.jpg" alt={config.SITE_NAME} fluid   />
                    <Image src="/assets/images/bicads-images/portfolio/Branding.jpg" alt={config.SITE_NAME} fluid   /> */}

                    </Col> 
                    </Row>
                    <Row   className='text-center'> 

                    <Col  lg={{span:8 ,offset:2}}>
                    <div className='portfolioCircle2'>

                    <NavLink to="/social-media-marketing-company"   activeclassname="active">
                    <Image src="/assets/images/bicads-images/portfolio/Social-Media.jpg" alt={config.SITE_NAME} fluid   />
                    </NavLink>

                    <NavLink to="/branding-services"   activeclassname="active">
                    <Image src="/assets/images/bicads-images/portfolio/Branding.jpg" alt={config.SITE_NAME} fluid   />
                    </NavLink>

                    </div>

                    </Col>
                    <Col lg='2'> 
                    
                    
                    <Fade direction='down'  delay="100" triggerOnce="true" className='secondCircle'><Image src="/assets/images/bicads-images/portfolio/Circle--Small-design.png" alt={config.SITE_NAME} fluid   />
                    </Fade></Col>
                    
                 </Row>





             
{/* 
                     <Row >
                        <Col lg="3">                        <Image src="/assets/images/bicads/Website.png" alt={config.SITE_NAME} fluid  rounded/>

                        <h4>Website</h4>
 </Col>
                       <Col lg="3">                        <Image src="/assets/images/bicads/Social-media.png" alt={config.SITE_NAME} fluid  rounded/>
                       <h4>Social Media</h4>

 </Col>
                        <Col lg="3">                       <Image src="/assets/images/bicads/Logo.png" alt={config.SITE_NAME} fluid  rounded/>
                        <h4>Logo</h4>

  </Col>
                       <Col lg="3">                        <Image src="/assets/images/bicads/branding.png" alt={config.SITE_NAME} fluid  rounded/>
                       <h4>Branding</h4>

 </Col>
                    </Row> */}

                    {/* <Row className='text-center py-5 animateBtn'>
    <a href="https://bicads.com/blog/portfolio/" target="_blank">  <button type="button" className='btn btn-primary btn-md  draw'  >    Our Portfolio</button> </a>
                    </Row> */}
                </Container>
            </div>
        );
    }

}

export default Portfolio;