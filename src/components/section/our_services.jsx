import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { NavLink } from 'react-router-dom';
import {Fade} from 'react-awesome-reveal'

class OurServices extends Component {

    render(){
        return(
            <div className=" ourServices animateBtn "  style={{ 
                backgroundImage: `url(/assets/images/bicads-images/our-service/BG.jpg)` 
              }}>
                <Container >
                     <Row >
                        <Col lg={{ span:10, offset:1 }} className='pt-5  text-center'>
                        <h2 className='mainTextH1'>  Best Digital Marketing Agency  </h2>
                        <h4 className='pt-2'>To Meet Your Marketing Goals </h4>
<p>The most significant element for any and every enterprise is to be where their customers are, as it builds trust, loyalty, and stimulates new sales. With ever-improving technology, individuals from diverse fields are able to connect via a variety of online platforms.</p>

<p>
With Right Digital Marketing, you can connect with the right target audience. We provide a wide range of services to help you establish and maintain your company online.

</p>

                                          </Col>
                       <Col lg="12" className='serviceIcons'>

                        <Row className='pt-5 '>
                            <Col lg='4'>
                            <Fade direction='up'  delay="40" triggerOnce="true">
                                <div className='serviceBox'> 
                              <Image src="/assets/images/bicads-images/our-service/Design-&-Development-Icon.png" alt={config.SITE_NAME} className='wobble' fluid  rounded/>
                                
                                <h4>  Design & Development</h4>
                                <p>With our thoughtful designs for CRM, websites and mobile applications, we help your business with centrally managed database, build & maintain online presence and keep the customers engaged. 
</p>
</div>
</Fade>                 </Col>
                        
                            <Col lg='4'>
                            <Fade direction='up'  delay="80" triggerOnce="true">

                            <div className='serviceBox'> 
   
                                                <Image src="/assets/images/bicads-images/our-service/Digital-Marketing-Icon.png" alt={config.SITE_NAME} fluid  rounded/>
                                 <h4>Digital Marketing</h4>
                                <p>We offer wide range of services like SEO, optimizing your social media and performance marketing (PPC) on all platforms that will boost your business for online sales.</p>
                                </div>
                                </Fade>
                            </Col>
                         
                            <Col lg='4'>  
                            <Fade direction='up'  delay="120" triggerOnce="true">
   
                            <div className='serviceBox'> 
                     <Image src="/assets/images/bicads-images/our-service/Wikipedia-Icon.png" alt={config.SITE_NAME} fluid  rounded/>
 
                            <h4>Wikipedia & PR</h4>
                                <p>Wikipedia & digital PR will help your business build reputation. Reputation management is essential for any company as it helps maintain brand equity, keep customers happy, and retain team trust.</p>
                                </div>
                                </Fade>
                            </Col>
                        </Row>

  
                                              </Col>

                                              <Col className='text-center py-5'>
                                                                    
<NavLink  to="/our-services"   activeclassname="active"><button type="button" class="btn btn-primary btn-md  draw ">View All Services</button></NavLink></Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default OurServices;