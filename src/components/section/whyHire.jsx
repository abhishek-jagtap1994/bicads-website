import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import {Fade} from 'react-awesome-reveal'
import { Typewriter } from 'react-simple-typewriter'

class WhyHire extends Component {

    render(){
        return(
            <div className='whyHireDiv'   style={{ 
                backgroundImage: `url(/assets/images/bicads-images/our-service/BG.jpg)` 
              }}>
                <Container className=" py-5   text-center">


                <h2 > Why Hire us </h2>

                <div className='imageText my-3'> 

                <Image src="/assets/images/bicads-images/why-hire/Search-Bar.png" alt={config.SITE_NAME} fluid  rounded/>
                <h4 className='textWords'>Efficient & Consistent With    <span style={{ color: '#01a5fe', fontWeight: '600' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Design', 'Measure', 'Analyze', 'Improve','Control']}
            loop={false}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
        </span></h4>

              
                </div>

                <p>We follow DMAIC process <br></br> To deliver good results on your marketing investments and be consistent.</p>  


                </Container>


                <div className='textDiv'>  <h1 className='mainTextH1 '>    </h1>
              </div>
                <Container className=" pb-5 text-center">
            
                 
               <Row className="  ">

               <Col lg={{span:2, offset:1}} >   
               <Fade direction='up'  delay="40" triggerOnce="true">
                    <Image src="assets/images/bicads-images/why-hire/Define.png"  fluid /> 
                    <h5>Design</h5>  
                    </Fade>
                    </Col>
                <Col lg='2' >  
                               <Fade direction='up'  delay="80" triggerOnce="true">
          
                <Image src="assets/images/bicads-images/why-hire/Measure.png"  fluid /> 
                <h5>Measure</h5>  
  
</Fade>                </Col>
                <Col lg='2'>
                                   <Fade direction='up'  delay="120" triggerOnce="true">

                <Image src="assets/images/bicads-images/why-hire/Analyze.png"  fluid /> 
                <h5>Analyze</h5>  
  
</Fade>                </Col>
                <Col lg='2'>
                                   <Fade direction='up'  delay="160" triggerOnce="true">

                <Image src="assets/images/bicads-images/why-hire/Improve.png"  fluid />
                <h5>Improve</h5>  
   
</Fade>                </Col>
                <Col lg='2'>
                                   <Fade direction='up'  delay="200" triggerOnce="true">

                <Image src="assets/images/bicads-images/why-hire/Control.png"  fluid />  
                <h5>Control</h5>  
 
</Fade>                </Col>
               </Row>
             

                      

                {/* <Row className='py-3' >
                        <Col lg="6">

                        <p>The best marketing is the one that’s automated. This is the reason why many businesses are turning to digital marketing agencies. We can handle the entire process from start to finish. We got the experience and knowledge to make it work.

</p>

<p>Furthermore, we will work with your team to create a seamless experience and get solutions that are optimized for your target audience. In the end, you will get results that are consistent and effective with our digital marketing services.

</p>
                           </Col>
                       <Col lg="6">

                       <Image src="/assets/images/bicads/why-we-are-constant.png" alt={config.SITE_NAME} fluid  rounded/>

                                              </Col>
                    </Row> */}
           

                    
                </Container>
            </div>
        );
    }

}

export default WhyHire;