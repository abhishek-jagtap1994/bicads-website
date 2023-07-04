import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'react-bootstrap/Image'
import {Fade} from 'react-awesome-reveal'

import { images } from './service'; 

const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: ['<img src="assets/images/bicads-images/Left-side.png">', '<img src="assets/images/bicads-images/Right-side.png">'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 6,

        }
    },
};
    class Owlslider extends Component {
    
    render() {
    return(
        <div className='AboutBg AboutUs '>
        <Container className="py-5">
        <h1 className='mainTextH1'>   Our Clientele </h1>

            <Row className="justify-content-center py-5 text-center ">
            {/* <Col xs lg="6">1 of 2</Col> */}
            <Col xs lg="12">
        <OwlCarousel className='owl-theme'  {...options}>
        <Fade direction='up'  delay="40" triggerOnce="true">


        {
       
        [...Array(21)].map((e, i=1) => {
                             return       <div className='item' key={i + 1}>

                             <Image src={ `assets/images/bicads-images/client/Client-logo-${i+1 }.png`}  fluid />  
                              
                             </div>               })}

         {/* {images.map( (val , i) => (  
               
    <div className='item' key={i}>
    <Image src={'assets/images/bicads-images/client/Client-logo-'+i+'.png'} alt={`${val.imgCaption}`} fluid />   
    </div>
                         )  )} */}
{/* <div className="productDiv" style={{ 
      backgroundImage: `url( ${val.imgUrl} )` 
    }} >
					        <div className="captionDiv">
						    <h3>{`${val.imgCaption}`} </h3>
 					     </div>
				         </div> */}
                        
                        </Fade>
</OwlCarousel>
</Col>
</Row>
</Container>
</div>
    );
}

}



export default Owlslider;