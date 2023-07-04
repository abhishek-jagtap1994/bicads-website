import React, { Component }  from 'react';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import SubHeader from '../components/layout/subheader';
import AboutUs from '../components/section/about_us';
import Owlslider from '../components/section/owlslider';
 
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import config from '../constant';
import { NavLink } from 'react-router-dom';
import {Fade} from 'react-awesome-reveal'

class About extends Component {
    componentDidMount(){
        document.title = "BICAds Digital - Website Development and Digital marketing"
      }
        render(){
    return(
        <div>
             
            <Header/>
            <SubHeader  Title='About' subtitle='us' BkImg='/assets/images/bicads-images/about-page/Banner.jpg' />
 
             {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading aboutDiv AboutUs'  style={{ 
                backgroundImage: `url(/assets/images/bicads-images/our-service/BG.jpg)` 
              }}>
                <Container className=" py-5   text-center">

                <Row className=" pt-2 ">
                    <Col lg={{span:10 , offset:1}}>
                <h1 className='mainTextH1'> About Us </h1>

            <h4 className='px-5 '>We Will Help You Build & Maintain <br></br> Your Online Presence</h4>

           <p> We Are A Creative Digital Marketing Agency Providing First Class Web Designing / Development And Digital Marketing Services.
</p><p>Backed Up With Highly Experienced Web Developers, Graphics Designers, S.E.O Experts & Google Adword Professionals, You Can Be Sure To Get Your Online Business Sky Rocketing In Coming Months.</p>
<p> BICADS DIGITAL Has Consistently Achieved Success By Helping Small And Medium Businesses Grow With It’s Rock Solid Web Designing & Digital Marketing Strategies. Our Sole Mission Is To Empower All Young Aspirations To Take Advantage Of Booming Digital Media And Accomplish Their Business Goals.
</p> 

</Col>
                </Row>           
                </Container>
            </div>
{/* --------------------------------------------------------- */}
            <div className='shipSection text-center '>
            <Container className='py-5'>
                <Row>
                    <Col lg='3' sm="6" xs="6">  
                    <Image src="/assets/images/bicads-images/about-page/Client-icon.png" alt={config.SITE_NAME}  fluid/>                            
                        <h4>300+ <p>Clients</p></h4> </Col>
                    <Col lg='3' sm="6"  xs="6">  
               <Image src="/assets/images/bicads-images/about-page/Keyword-icon.png" alt={config.SITE_NAME}  fluid/>                            

                       <h4>12000+ <p>keywords ranked</p></h4></Col>
                    <Col lg='3' sm="6"  xs="6"> 
               <Image src="/assets/images/bicads-images/about-page/Leads-icon.png" alt={config.SITE_NAME}  fluid/>                            

                       <h4>35000+  <p>leads generated</p></h4></Col>
                    <Col lg='3' sm="6"  xs="6"> 
               <Image src="/assets/images/bicads-images/about-page/ad-budget-icon.png" alt={config.SITE_NAME}  fluid/>                            

                       <h4>50 lakh+  <p>spent on ads budget</p></h4></Col>
                </Row>
            </Container>
        </div>

{/* --------------------------------------------------------- */}

<div className='weBelive py-5  ' style={{ 
                backgroundImage: `url(/assets/images/bicads-images/our-service/BG.jpg)` 
              }}>

<Container>
    <Row className='pb-5'>
        <Col lg="5">
            <div className='portfolioCircle'>
        <Image src="/assets/images/bicads-images/about-page/What-we-believe.png" alt={config.SITE_NAME} fluid   />

        </div>
              </Col>

              <Col lg="7" className='pt-5'>

     
        <h2 className='mainTextH4 px-4'>What We Believe</h2>

<p className='px-4' >Team BICAds Digital has the determination, drive, and expertise to tackle any problem. We are just human beings who breathe and live life for what we do, so We are grateful that our clients entrust us with their project demands. Building trust takes time, and we want to ensure we deliver on our promises of transparency and accountability. We can do this by paying close attention to our clients and continually refining our service. Customer confidence is built through transparency and accountability. It isn't possible to compel trust, and it cannot be assumed.
 </p>
        </Col>
        </Row>

        <Row className='py-5'>
        <Col  lg={{span:5 , order:2}}  >
        <div className='portfolioCircle2'>

        <Image src="/assets/images/bicads-images/about-page/Journey.png" alt={config.SITE_NAME} fluid   />
        </div>


</Col>
<Col lg={{span:7 , order:1}} className='ourJourny'>
<h2 className='mainTextH4'>Our Journey</h2>
 
 <p  >We set out five years ago to become one of the finest digital marketing firms in Pune and Mumbai. We adhere to the principles of discipline and are a dedicated team with a creative and innovative mindset. Our journey has been a journey of ups and downs as we've learnt and worked with diverse clients. As we begin to expand our team and work on new projects, we want to make sure that we’re continuing to hire people who share our values. This way, we know that no matter what steps we take to grow our business, our team will always stay aligned. </p>

        </Col>
    </Row>
</Container>

</div>
{/* --------------------------------------------------------- */}

<div className="lookingFor pad15 d-none">
<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h2>Check our wide range of digital marketing services! </h2>
      <NavLink to="/our-services"   activeclassname="active"> <button type="button" className="btn btn-primary btn-md  draw ">Our Services</button></NavLink>
       
    </div>
    

  </div>
</div>
</div>
{/* --------------------------------------------------------- */}

<div className='ServiceHeading stillLove '>


<Container className='workWithUs '>
    <div className=' py-5 text-center'>
<h1 className='mainTextH1'>You Will Love Working With Us! </h1>

</div>

<Row>
    <Col lg='6'>
        <Fade direction='up'  delay="40" triggerOnce="true">
        <div className='portfolioCircle'>

        <div className='serviceBox'> 
        <Image src="/assets/images/bicads-images/about-page/icon-1.png" alt={config.SITE_NAME} className='wobble' fluid  rounded/>
        
        <h4>  Performance Oriented</h4>
        <p>BICAds Digital is the perfect digital marketer for those searching for people who perform. Performance is our company's greatest strength, so if you want to hire people who can actually accomplish things, BICAds Digital is the place to go!
    </p>
    </div>
    </div>
    </Fade>   

    </Col>
    <Col lg='6'>
    <Fade direction='up'  delay="40" triggerOnce="true">
        <div className='serviceBox'> 
        <Image src="/assets/images/bicads-images/about-page/icon-2.png" alt={config.SITE_NAME} className='wobble' fluid  rounded/>
        
        <h4>  Customer Centric</h4>
        <p>We provide comprehensive digital marketing services from lead generation to post-sale support. We handhold our clients from start to finish. </p>
    </div>
    </Fade>   

    </Col>
 </Row>

 <Row className='pb-5 '>
    <Col lg='6'>
        <Fade direction='up'  delay="40" triggerOnce="true">
        <div className='serviceBox'> 
        <Image src="/assets/images/bicads-images/about-page/icon-3.png" alt={config.SITE_NAME} className='wobble' fluid  rounded/>
        
        <h4>Build Your Business With Digital </h4>

        <p>BICAds Digital is the perfect digital marketing partner for modern entrepreneurs seeking to expand their businesses across multiple digital platforms!</p>
    </div>
    </Fade>   

    </Col>
    <Col lg='6'>
    <Fade direction='up'  delay="40" triggerOnce="true">
    <div className='portfolioCircle2'>

        <div className='serviceBox'> 
        <Image src="/assets/images/bicads-images/about-page/icon-4.png" alt={config.SITE_NAME} className='wobble' fluid  rounded/>
        
        <h4>Measure Your Success </h4>
        <p>BICAds Digital is all about results! Our clients can evaluate the quality of our work and also calculate the ROI for it. Everything boils down to results, and BICAds Digital is aware of this fact!</p>
    </div>
    </div>
    </Fade>   

    </Col>
 </Row>
    {/* <Row className='firstRow '>
        <Col lg='6'>
        <Image src="/assets/images/bicads/about/Icon-2.png" alt={config.SITE_NAME} fluid   />
        <h4>Performance Oriented </h4>
        <p>BICAds Digital is the perfect digital marketer for those searching for people who perform. Performance is our company's greatest strength, so if you want to hire people who can actually accomplish things, BICAds Digital is the place to go!</p>
             </Col>
        <Col lg='6'> 
        <Image src="/assets/images/bicads/about/Icon-1.png" alt={config.SITE_NAME} fluid   />
        <h4>Customer Centric  </h4>
        <p>We provide comprehensive digital marketing services from lead generation to post-sale support. We handhold our clients from start to finish.</p>
        
        </Col>
    </Row>
    <Row className='SecondRow pb-4'>
        <Col lg='6'> 
         <Image src="/assets/images/bicads/about/Icon-3.png" alt={config.SITE_NAME} fluid   />
        <h4>Build Your Business With Digital </h4>
        <p>BICAds Digital is the perfect digital marketing partner for modern entrepreneurs seeking to expand their businesses across multiple digital platforms!</p></Col>
        <Col lg='6'>
        <Image src="/assets/images/bicads/about/Icon-4.png" alt={config.SITE_NAME} fluid   />
        <h4>Measure Your Success </h4>
        <p>BICAds Digital is all about results! Our clients can evaluate the quality of our work and also calculate the ROI for it. Everything boils down to results, and BICAds Digital is aware of this fact!</p>

        </Col>
    </Row> */}
</Container>
</div>
             <Footer/>


        </div>
    );

}
    }
export default About;