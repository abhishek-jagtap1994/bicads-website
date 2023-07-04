import React, { Component }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import config from '../../constant';
import Nav from 'react-bootstrap/Nav';

 class Footer extends Component {
  render(){
    return(
      <>


<div className="lookingFor pad15  d-none">
<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h2>Lets Start Your Project! </h2>
      <NavLink to="/contact"   activeclassname="active"> <button type="button" className="btn btn-primary btn-md  draw ">Request A Callback</button></NavLink>
       
    </div>
    

  </div>
</div>
</div>
        <div className='footerSection'>
          {/* row-cols-4  */}
     <Container > 
     <Row className=" py-5  ">
    <Col lg="4">
       
         
      <NavLink to="/"   activeclassname="active">
        <Image src="/assets/images/bicads/bicads_logo_rectangle.png" alt={config.SITE_NAME}  fluid/>  <br></br></NavLink> 
      <br></br>
      <p>We Are A Creative Digital Marketing Agency Backed Up With Highly Experienced Web Developers, Graphics Designers, S.E.O Experts & Google Adwords Professionals, You Can Be Sure To Get Your Online Business Sky Rocketing In Coming Months.</p>

      <ul class="nav">
      <li> <a href="https://www.facebook.com/bicadsdigital" target="_blank"><i class="fa fa-facebook"></i></a> </li>
      <li> <a href="https://www.instagram.com/bicads_digital/" target="_blank"><i class="fa fa-instagram"></i></a></li>
      
      <li> <a href="https://twitter.com/BICADS_Digital" target="_blank"><i class="fa fa-twitter"></i></a></li>
      <li> <a href="https://www.linkedin.com/in/bicads-digital-marketing-405353142/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      </ul>


    </Col>

    

  

    <Col lg="4" >
      <Row>
    <Col lg='12'>
    <h5>Address</h5>
</Col>
</Row>
<Row className='footerAddress'>
  <Col lg='12'>
  <p>   <Image src='/assets/images/bicads-images/Address-Icon.png'  alt={config.SITE_NAME} /> <span className='faPara'> Floor No 2, Anchor House,  Flyover Chowk, Lullanagar,   <span class="newline"></span>Pune, Maharashtra - 411040. </span>
</p>
  </Col>
  
  <Col lg='12'>
     
  <p> <Image src='/assets/images/bicads-images/Address-Icon.png'  alt={config.SITE_NAME} /> <span className='faPara'>  C-12, Mayfair Eleganza Phase 1, <span class="newline"></span>NIBM Road, Kondhwa,  <span class="newline"></span>Pune - 411048. </span>
</p>
  </Col>
</Row>



   
    
    </Col>
    <Col lg='4'>

<Row >
  <Col  lg='12' className='contactIcon'> 
  <h5>Contact</h5>

  <p><Image src='/assets/images/bicads-images/Call-Icon.png'  alt={config.SITE_NAME}/>  <span className='faPara'> <a href="tel: +919082309192"> +91 9082309192</a> &nbsp;&nbsp;| </span>   <span className='faPara'>  <a href="tel: +91 93730 80664">    +91 9373080664</a> </span></p>
  </Col>
  <Col  lg='12'>
     
<p><Image src='/assets/images/bicads-images/Email-Icon.png'  alt={config.SITE_NAME} /> <span className='faPara'>  <a href="mailto:support@bicads.com">support@bicads.com </a>  </span></p>

  </Col>
</Row>

 <Row>
<Col lg='12'>
<h5>Other Links</h5>
</Col>
<Col lg='12'>
<ul className="nav  " >
 
 <li  className="nav-item mb-2 mr-2 ">   <NavLink to="/our-services"   activeclassname="active">Our Services &nbsp;| </NavLink></li>
 <li  className="nav-item mb-2 mr-2">   <NavLink to="/privacy-policy"   activeclassname="active">Privacy Policy &nbsp;| </NavLink></li>
 <li  className="nav-item mb-2 mr-2">   <NavLink to="/contact"   activeclassname="active">Contact Us</NavLink>
 
 </li></ul>

    
</Col>


 </Row>
      


</Col>
  </Row>
    </Container>

        </div>
 
        <a href="https://api.whatsapp.com/send?phone=919082309192&amp;text=Hey BICads Digital, Greetings of the day! Need assistance with my Website / Digital Marketing!" class="float" target="_blank">

<i class="fa fa-whatsapp my-float"></i>

</a>
        </>
    );

}
}
export default Footer;
