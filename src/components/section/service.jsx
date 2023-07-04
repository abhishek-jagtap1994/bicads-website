import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
export const images = [
    {
        imgUrl: '/assets/images/hotel/24_Hours_Front_Desk.png',
        imgCaption:'24 Hours Front Desk'
    },
    {
        imgUrl: '/assets/images/hotel/24_Hours_Hot_and_Cold_Water.png',
        imgCaption:'24 Hours Hot and Cold Water'
    },
    {
        imgUrl: '/assets/images/hotel/24_Hours_housekeeping.png',
        imgCaption:'24 Hours housekeeping'
    },
    {
        imgUrl: '/assets/images/hotel/24_Hours_Room_Service.png',
        imgCaption:'24 Hours Room Service'
    },
    {
        imgUrl: '/assets/images/hotel/24_Hours_Security_Guards.png',
        imgCaption:'24 Hours Security Guards'
    },
    {
        imgUrl: '/assets/images/hotel/Attached_Wash-room.png',
        imgCaption:'Attached Wash-room'
    },
    {
        imgUrl: '/assets/images/hotel/Careful_and_Multilingual_staff.png',
        imgCaption:'Careful and Multilingual Staff'
    },
    {
        imgUrl: '/assets/images/hotel/couple_friendly_hotels.png',
        imgCaption:'couple friendly hotels'
    },
    
    {
        imgUrl: '/assets/images/hotel/Dining_Area.png',
        imgCaption:'Dining Area'
    },
    {
        imgUrl: '/assets/images/hotel/Fire_Extinguisher.png',
        imgCaption:'Fire Extinguisher'
    },
    {
        imgUrl: '/assets/images/hotel/Free_Parking_Available.png',
        imgCaption:'Free Parking Available'
    },
    {
        imgUrl: '/assets/images/hotel/free_wifi.png',
        imgCaption:'free wifi'
    },
    {
        imgUrl: '/assets/images/hotel/Intercom_Facilities.png',
        imgCaption:'Intercom Facilities'
    },
    {
        imgUrl: '/assets/images/hotel/Lift_Facility.png',
        imgCaption:'Lift Facility'
    },
    {
        imgUrl: '/assets/images/hotel/Mini-Conference_Hall.png',
        imgCaption:'Mini-Conference Hall'
    },
    {
        imgUrl: '/assets/images/hotel/Restaurant.png',
        imgCaption:'Restaurant'
    },
    {
        imgUrl: '/assets/images/hotel/smart_Led_TV.png',
        imgCaption:'smart Led TV'
    },
    {
        imgUrl: '/assets/images/hotel/standard_Ac_Room.png',
        imgCaption:'standard Ac Room'
    },
    {
        imgUrl: '/assets/images/hotel/Super_Deluxe_Ac_Room.png',
        imgCaption:'Super Deluxe Ac  Room'
    },
    {
        imgUrl: '/assets/images/hotel/Veg_non-veg_food_is_available.png',
        imgCaption:'Veg non-veg food is available'
    },
    
    

]
class Service extends Component {

   
    render(){
        return(
            <div>
              <Container className="pb-3">
            <h1 className="py-2">Speciality</h1>
            <Row className="justify-content-center text-center">

                        {images.map( (val , i) => (     
                        <Col lg="4" key={i}>   
                         <div className="productDiv" style={{ 
      backgroundImage: `url( ${val.imgUrl} )` 
    }} >
					        <div className="captionDiv">
						    <h3>{`${val.imgCaption}`} </h3>
						    <span className="plus"><a href="https://www.jadefinance.org/green_climate_funding">+</a></span>
					     </div>
				         </div>
                         </Col>
                         )  )}


                         
                       
                     </Row>
                </Container>
            </div>
        )
    }
}

export default Service;