import React from "react";
import photo from './image/photo.jpg';
import photo1 from './image/photo1.jpg';
import photo2 from './image/photo2.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {Carousel} from "react-bootstrap";

const Home =()=>{
    return(

<>

<div classNameName="container-fluid nav bg">
    <div classNameName="row">
        <div classNameName="col-12 mx-auto">
       {/*<div>
          <h4 style={{textAlign:"center"}}>Welcome to INDIA</h4>
       <img src={photo1} alt="home image" width="100%" />
   

           
       </div>*/}
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={photo} style={{width:"100%", height:"90.5vh"}} alt=".."/>
      <div class="carousel-caption d-none d-md-block">
      <p style={{marginBottom:"32rem", color:"blue"}}> <h3 >Welcome To India,</h3>Once you come must visit.</p>
       <h5>Taj Mahal</h5>
     
      </div>
    </div>
    <div class="carousel-item">
      <img src={photo1} style={{width:"100%", height:"90.5vh"}}alt=".."/>
      <div class="carousel-caption d-none d-md-block">
      <p style={{marginBottom:"32rem", color:"blue"}}> <h3 >Welcome To India,</h3>Once you come must visit.</p>
        <h5>Golden Temple</h5>
  
      </div>
    </div>
    <div class="carousel-item">
      <img src={photo2} style={{width:"100%", height:"90.5vh"}} alt=".."/>
      <div class="carousel-caption d-none d-md-block">
      <p style={{marginBottom:"32rem", color:"blue"}}> <h3 >Welcome To India,</h3>Once you come must visit.</p>
       <h5>Akshardham Temple</h5>
     
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      
        </div>
    </div>
</div>
       





</>

    );

}
export default Home;