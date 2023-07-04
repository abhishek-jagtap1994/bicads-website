import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

const mapStyle = [
   { width:'100%' ,
    height:'450px',
    border:0,
    allowFullScreen:'',
    loading:'lazy',
    referrerPolicy:'no-referrer-when-downgrade'
}
]
class Googlemap extends Component {
    render(){
        return(   
            
            <Container className="py-5">
            <Row>
                <Col>
                <div  className="d-none" style={{ height: '10vh', width: '100%' }}>
                <GoogleMapReact 
    bootstrapURLKeys={{ key: "" }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
  </div>
  
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9612448416806!2d73.88673456489224!3d18.485414587429478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb3c32c8cec3%3A0x93d1c460f59784d2!2sSpace-Ex%20Coworking%20%26%20Networking!5e0!3m2!1sen!2sin!4v1671089169231!5m2!1sen!2sin" allowFullScreen=''loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{ height: '50vh', width: '100%'  }}/>

                </Col>
            </Row>
        </Container>  
        )
    }
}

export default Googlemap;