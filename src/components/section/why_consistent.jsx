import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';

class WhyConsistant extends Component {

    render(){
        return(
            <div className='whyConsistent'>
                <Container className=" py-5 text-center ">

                     <Row >
                        <Col lg="12">
                        <h1 className='mainTextH1'> Why We Are Consistent! </h1>

                        <p className='pt-5'>We follow DMAIC process to deliver good results on your marketing investments and be consistent.

</p>  
                                             </Col>
 
                    </Row>
                </Container>
            </div>
        );
    }

}

export default WhyConsistant;