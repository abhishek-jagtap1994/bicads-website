import React, { Component }  from 'react';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import SubHeader from '../components/layout/subheader';
import AboutUs from '../components/section/about_us';
import Owlslider from '../components/section/owlslider';
import { Helmet, HelmetProvider } from "react-helmet-async";

import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import config from '../constant';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import {Fade} from 'react-awesome-reveal'

export const cardImages = [
    {
      imgUrl: 'assets/images/hotel/Deluxe_Ac_Room.png',
      imgCaption:'Deluxe Ac Room'
  },
    {
      imgUrl: 'assets/images/hotel/standard_Ac_Room.png',
      imgCaption:'standard Ac Room'
  },
  {
      imgUrl: 'assets/images/hotel/Super_Deluxe_Ac_Room.png',
      imgCaption:'Super Deluxe Ac  Room'
  },
  
   ]

class OurServiceMain extends Component {
    componentDidMount(){
        document.title = "BICAds Digital - Website Development and Digital marketing"
      }
        render(){
    return(
        <div>
               <HelmetProvider>
             <title>Website development and digital marketing agency</title>
	<meta name="description" content="360° solutions under one roof for your online presence. Web Design| Social Media| SEO| Performance Marketing| PR| Wikipedia" />
	<link rel="canonical" href="https://bicads.com/our-services" />
   </HelmetProvider>
            <Header/>
            <SubHeader  Title='Our ' subtitle='Services' BkImg='/assets/images/bicads/about/About-us-banner.jpg' />
 
             {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pt-5   text-center">
                <h1 className='mainTextH1'>Our Services</h1>

              
                </Container>
            </div>
{/* --------------------------------------------------------- */}
            <div className=' ourServices2  text-center ServicePageDiv1'>

                
            <Container >
            <h4 >Design And Development</h4>

 
<p className='pt-3 mb-0'> It's simple to create your own design these days. However, having a professional website design company create your site for you would certainly provide you with several advantages. Despite the fact that a professional website company can create your website / mobile app / crm, there are several advantages to doing so.  Unprofessionally designed or antiquated website would harm search engine ranking performance. You need to invest properly in a website in order to stay at the top of the search engine rankings. Google takes website investment very seriously. </p> 

   <Row  className='pt-5'>

   

               <Col lg='4' >

               <Fade direction='up'  delay="120" triggerOnce="true">
               <div className='portfolioCircle'>

   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Website-Design.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4> Website Design</h4>
       <p> A well-designed website can get your business in front of your target audience. Brand visibility is critical for business success. A website development company can help you achieve this goal.
   </p>
   <NavLink  to="/website-development-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
       </div>
       </div>

       </Fade>

            
             </Col>

             <Col lg='4' >

             <Fade direction='up'  delay="120" triggerOnce="true">

   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/E-commerce-website.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4>  E-commerce Website</h4>
       <p>E-commerce websites are cheaper than offline businesses because all of the sales procedures are automated online. E-commerce websites allow you to do business anywhere.
   </p>
   <NavLink  to="/e-commerce-website-development"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button></NavLink>   
       </div>
       </Fade>

             </Col>


             <Col lg='4' >


             <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/CMS-CRM.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4> CRM/CMS DEVELOPMENT</h4>
       <p>A CRM system records and manages all of the information exchanged with clients and prospective clients, enabling salespeople to find the right data. A central database holds all the details of the deal.
   </p>
   <NavLink  to="/crm-cms-development-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>     
       </div>
       </Fade>

             </Col>

         </Row>  

         <Row className="pb-5">   
         <Col lg={{ offset:'2' , span:'4' }} >


         <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Mobile-App.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4> MOBILE APP DEVELOPMENT</h4>
       <p> App development is a great way to keep customers and gain new ones in today's competitive economy. Mobile apps allow firms to stay up to date with the competition.
   </p>
   <NavLink  to="/mobile-app-development-company"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>        
       </div>
       </Fade>


            
             </Col>


             <Col lg='4' >

                
         <Fade direction='up'  delay="120" triggerOnce="true">
         <div className='portfolioCircle2'>

   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Graphic-design.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4> GRAPHIC DESIGN</h4>
       <p>  Graphic design is the art of applying elements such as icons, shapes, colors, text, and pictures to printed material such as posters, brochures, websites, and more.
   </p>
   <NavLink  to="/graphic-design-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>         
       </div>
       </div>
       </Fade>

            </Col>
         
            </Row> 
                
            </Container>
        </div>

{/* --------------------------------------------------------- */}

<div className=' ourServices2 digitalMarketing   text-center ServicePageDiv'>

<Container className='py-5'>
            <h4>Digital Marketing</h4>

 
<p  className='pt-3 mb-0'> The most important element of any enterprise is to be where their customers are. With the help of technology, individuals from diverse fields are able to connect online. With digital marketing, you can connect with the right target audience. We provide a wide range of services to help you establish and maintain your company online.</p> 

   <Row className='pt-5'>

               <Col lg='4' >

                        
         <Fade direction='up'  delay="120" triggerOnce="true">
         <div className='portfolioCircle'>

   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Social-Media.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4>  Social media marketing </h4>
       <p>  Social media networks are a cost-effective marketing opportunity. Anyone who isn't using them is missing out.
   </p>
   <NavLink  to="/social-media-marketing-company"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink> 
       </div>
       </div>
       </Fade>

 
             </Col>

             <Col lg='4' >

             <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Search-Engine.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4>  SEO </h4>
       <p>  E-commerce websites are cheaper than offline businesses because all of the sales procedures are automated online. E-commerce websites allow you to do business anywhere.
   </p>
   <NavLink  to="/search-engine-optimization-company"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink> 
       </div>
       </Fade>

 
             </Col>


             <Col lg='4' >

             <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/PPC.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4>  Pay Per Click </h4>
       <p>   We can help you set up campaigns that target your ideal customers with Google AdWords or Facebook Ads. We understand how to maximise the effectiveness of the campaign.
   </p>
   <NavLink  to="/ppc-pay-per-click-marketing-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>        
       </div>
       </Fade>


            

             </Col>

         </Row>  

         <Row>   
         <Col lg='4' >

            
         <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Content-Marketing.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4> Content Marketing </h4>
       <p>  To achieve your goals, we determine what your audience should be able to do, produce blog posts, infographics, podcasts, videos, and more.
   </p>
      <NavLink  to="/content-marketing-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>       
       </div>
       </Fade>
                </Col>


             <Col lg='4' >

             <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Branding.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4> Branding Services </h4>
       <p>   Your business should be represented by the best in the industry. We can work with you to design a logo, colour scheme, and aesthetic language that expresses your personal identity.
   
   </p>
    <NavLink  to="/branding-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>      
       </div>
       </Fade>
 
             </Col>


             
             <Col lg='4' >


             <Fade direction='up'  delay="120" triggerOnce="true">
             <div className='portfolioCircle2'>

   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/PR.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4>Digital PR </h4>
       <p> A Digital PR Service provides value to your target audience by creating compelling content that increases awareness of the brand and online presence.
   </p>
      <NavLink  to="/digital-pr"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>     
       </div>
       </div>
       </Fade>
 

             </Col>
         
         
            </Row> 

            <Row >   

                <Col lg={{ offset:'4' , span:'4' }}>

                <Fade direction='up'  delay="120" triggerOnce="true">
   
   <div className='serviceBox'> 
<Image src="/assets/images/bicads-images/Icons/Wikipedia.png" alt={config.SITE_NAME} fluid  rounded/>

   <h4>Wikipedia Page </h4>
       <p> A Digital PR Service provides value to your target audience by creating compelling content that increases awareness of the brand and online presence.
   </p>
      <NavLink  to="/wikipedia-page-creation-service"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>       
       </div>
       </Fade>
                       </Col>
            </Row>
                
            </Container>

</div>

{/* --------------------------------------------------------- */}

             <Footer/>


        </div>
    );

}
    }
export default OurServiceMain;