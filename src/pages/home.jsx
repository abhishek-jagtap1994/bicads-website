import React, { Component ,useEffect }  from 'react';
import props from 'prop-types';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
      import AboutUs from '../components/section/about_us';
 import HomeTop from '../components/section/hometop';
import OurServices from '../components/section/our_services';
import WhyHire from '../components/section/whyHire';
import WhyConsistant from '../components/section/why_consistent';
import Portfolio from '../components/section/portfolio';
import BlogDiv from '../components/section/blog';

 import { Helmet, HelmetProvider } from "react-helmet-async";
import Owlslider from '../components/section/owlslider';
 
 class Home extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div>
 
             <HelmetProvider>
             <meta charSet="utf-8" />
                <title> Digital Marketing Services &amp; Website Development Company | Pune | Mumbai </title>
	<meta name="description" content="Digital Marketing Services to build & maintain online presence. Website Development, Social Media, SEO, PR, Wikipedia Services" />
	<link rel="canonical" href="https://bicads.com/" />   
   </HelmetProvider>
   
        <Header  />  
        <HomeTop/> 
        <OurServices/>
        <Owlslider/>
         {/* <AboutUs/> */}
        <WhyHire/>
        {/* <WhyConsistant/> */}
        <Portfolio/>
        <BlogDiv/>
        {/* <BookingForm/> */}
        {/* <AboutHome  Name="Abhi" Surname="Jagtap" />     */}
        {/* <Goal isGoal = {true}/> */}
        {/* <Owlslider/>
        <CardSec/>   */}

        <Footer/>
        </div>
    );
} 
}
export default Home;