import React, { Component,useEffect, useState,useRef } from 'react';
 
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    
     navText: ['<img src="/assets/images/bicads-images/Left-side.png"  alt="BICAds Digital">', '<img src="/assets/images/bicads-images/Right-side.png" alt="BICAds Digital">'],
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
            items: 3,

        }
    },
};
 
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

     const BlogDiv = () => {
        
   


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://bicads.com/blog/wp-json/wp/v2/posts?_embed');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
           // console.log(posts);
            setPosts(posts);
        }
    
        loadPosts();
   }, [])
 
         return(
            <div className="blogDiv"  style={{ 
                backgroundImage: `url(/assets/images/bicads-images/our-service/BG.jpg)` 
              }}>
                <Container className=" py-5  text-center">
                <h1 className='mainTextH1'>Blog  </h1>

                     <Row className=" pt-5">

                     {posts.length && (
                     <OwlCarousel className='owl-theme'  {...options} >

                     { posts.map((post, index) => (

                      <div className='item' key={index}>
                <a href={`${post.link}`} target="_blank" >

<div className="productDiv" style={{ 
      backgroundImage: `url( ${post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} )` 
    }} >
					       
				         </div>

                         <div className="captionDiv">
						    <h3>{`${post.title.rendered  }`} </h3>
                            <p>Read More...</p>

  					     </div>
                         </a>

                         </div>
                         
                        ))}
</OwlCarousel>
)
}
                        {/* <Col lg="4">   <Image src="assets/images/bicads/Blog.png" alt={config.SITE_NAME} fluid  rounded/> </Col>
                        <Col lg="4">   <Image src="assets/images/bicads/Blog.png" alt={config.SITE_NAME} fluid  rounded/> </Col> */}
                    </Row>
                </Container>
            </div>
        );
     

}

export default BlogDiv;