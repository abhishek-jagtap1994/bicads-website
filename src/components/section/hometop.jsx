import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import {Fade} from 'react-awesome-reveal'
 
      const HomeTop = () => {
   
    
    
      

        
        return(
            <div  className='topHome' style={{ 
                backgroundImage: `url(/assets/images/bicads-images/banner/Bicads-Homepage-Banner.jpg)` 
              }} >
                <Container className=" pt-5 ">

                   
                     <Row  className='pt-4 text-center  animateBtn'>
                        <Col lg="12" > 
                        
              
        <Fade direction='up' triggerOnce="true">
 <h1 className='mainTextDesignH1'> Digital Marketing Services  </h1> </Fade>
 <Fade direction='down' triggerOnce>
    <h2 > To Build & Maintain Your Online Presence </h2></Fade>

 
                    
                       </Col>
                       
                    </Row>
                    <Row className=' pt-4 text-center'>
                        <Col>

                        <Fade direction='up'  delay="40" triggerOnce="true">
                        <NavLink to="/website-development-services"   activeclassname="active">
                        <Image src='/assets/images/bicads-images/banner/Web-development.png'/>
                        <h3>Web Development </h3>
                        </NavLink>
                        </Fade>
                        </Col>
                        <Col> 
                        <Fade direction='up'  delay="80" triggerOnce="true">
                        <NavLink to="/social-media-marketing-company"   activeclassname="active">
                         <Image src='/assets/images/bicads-images/banner/Social-Media.png'/>
                         <h3>Social Media  </h3>
                         </NavLink>

                         </Fade>
                         </Col>

                        <Col>
                        <Fade direction='up'  delay="120" triggerOnce="true">
                        <NavLink to="/search-engine-optimization-company"   activeclassname="active">
                        <Image src='/assets/images/bicads-images/banner/Search-Engine.png'/>
                        <h3>Search Engine  </h3>
                        </NavLink>
                        </Fade>

                        </Col>
                        <Col>   
                        <Fade direction='up'  delay="160" triggerOnce="true">
                        <NavLink to="/branding-services"   activeclassname="active">
                          <Image src='/assets/images/bicads-images/banner/Infulencer.png'/>
                          <h3>Influencer Marketing </h3>
                          </NavLink>
                          </Fade>
                        </Col>
                        <Col>
                        <Fade direction='up'  delay="200" triggerOnce="true">
                        <NavLink to="/digital-pr"   activeclassname="active">
                        <Image src='/assets/images/bicads-images/banner/PR.png'/>
                        <h3> Digital PR</h3>
                        </NavLink>

                        </Fade>

                        </Col>
                        <Col>
                        <Fade direction='up'  delay="240" triggerOnce="true"> 
                        <NavLink to="/wikipedia-page-creation-service"   activeclassname="active">
                        <Image src='/assets/images/bicads-images/banner/Wikipedia.png'/>
                        <h3>  Wikipedia Page</h3>
                        </NavLink>

                        </Fade>

                        </Col>
                    </Row>

                    <Row>
                        <Col className='text-center pt-4 animateBtn'>
                <NavLink  to="/contact"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Request Callback</button>
              
                       </NavLink> 
                       </Col>
                       </Row>

                </Container>
            </div>
        );
    }



export default HomeTop;