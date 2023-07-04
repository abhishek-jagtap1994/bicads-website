import React, { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
import config from '../../constant';
 import FloatingLabel from 'react-bootstrap/FloatingLabel';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
    
     
   
    function validate(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

  
      const Contactform = () => {
 
       
        const [double, setDouble] = useState(false);


        const [mailerState, setMailerState] = useState({
          name: "",
          phone:"",
          email: "",
          message: "",
        });
    
        function handleStateChange(e) {
          setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        }
    
        const submitEmail = async (e) => {
           e.preventDefault();
            setDouble(true);
          const response = await fetch(config.BASE_URL+"sendBicads/", {
            
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({ mailerState }),
          })
            .then((res) => res.json())
            .then(async (res) => {
              const resData = await res;
              console.log(resData);
              if (resData.status === "success") {
                //alert("Message Sent");
                toast.success("Message Sent!" , {autoClose: 2000})

              } else if (resData.status === "fail") {
               // alert("Message failed to send");
               toast.success("Message failed to send!", {autoClose: 2000})

              }
            })
            .then(() => {
              setMailerState({
                email: "",
                name: "",
                phone:"",
                message: "",
              });
              setDouble(false);

            });
            
        };
    
         return(
          <div className=' AboutBgRight ContactDiv'>
             <Container className="py-5">
             <ToastContainer />

                <Row>
                    <Col lg="6">
                        <h3  className="py-3">Contact Us</h3>
                        <Form  onSubmit={submitEmail}
>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                
                                <Form.Control type="text" required placeholder="name " onChange={handleStateChange}
 name="name"  value={mailerState.name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" required maxLength={10} minLength={10} onKeyPress={validate} onChange={handleStateChange}
 name="phone"  value={mailerState.phone} placeholder="88888 55555" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required placeholder="name@example.com" onChange={handleStateChange}
           name="email"
           value={mailerState.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleStateChange}
           name="message"     value={mailerState.message}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <button type="submit" className='btn btn-primary'  disabled={double} >    Submit

    </button>
                            </Form.Group>

                            </Form>
                    </Col>
                    <Col  lg="6" className="contactUS">
 
<h4 className="pt-3">Address</h4>

<p> <b> <i className="fa fa-building"></i> </b> <span class="faPara"> Floor No 2, Anchor House, <br></br> Flyover Chowk, Lullanagar, 

<br></br> <span class="newline"></span>Pune, Maharashtra - 411040. </span>
</p>


<p> <b> <i className="fa fa-building"></i> </b><span class="faPara">  C-12, Mayfair Eleganza Phase 1, <br></br> NIBM Road, Kondhwa, 

<br></br> <span class="newline"></span>Pune, Maharashtra - 411048. </span>
</p>
      <hr/>


      <h4>Email</h4>
<p><i className="fa fa-envelope"></i> <span class="faPara"> <a href="mailto:support@bicads.com">support@bicads.com </a>  </span></p>

<hr/>


      <h4>Phone Office</h4>  
<p><i className="fa fa-mobile"></i> <span class="faPara"> <a href="tel: +919082309192"> +91 90823 09192</a> | <a href="tel: +91 93730 80664"> +91 93730 80664</a>  </span></p>
                     </Col>
                </Row>
            </Container>

            </div>
         )
    }


export default Contactform;