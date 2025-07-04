 import React from 'react'
 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 const Footer = () => {
   return (
     <div>
       <footer class="bg-dark text-white pt-5 pb-4">
  <div class="container text-md-left">
    <div class="row text-md-left">

      <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">Easy Trip</h5>
        <p>Your journey starts here—download the Easy Trip app now and unlock seamless bookings, personalized adventures, and exclusive travel deals. It's time to explore more, stress less.</p>
      <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3" style={{display:'flex', justifyContent:'center'}}>
        <Link class="btn btn-outline-light btn-sm me-2" to='/aboutus' href='#'>
          <i class="fab fa-google-play"></i> About Us
        </Link>
        <Link to="/blogs" class="btn btn-outline-light btn-sm">
          <i class="fab fa-apple"></i> Our Blogs
        </Link>
      </div>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">Download Our App</h5>
        <a href="#" class="btn btn-outline-light btn-sm me-2">
          <i class="fab fa-google-play"></i> Google Play
        </a>
        <a href="#" class="btn btn-outline-light btn-sm">
          <i class="fab fa-apple"></i> App Store
        </a>
      </div>

      <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
        <a href="#" class="text-white me-4"><i class="fab fa-facebook-f"></i>Facebook</a>
        <a href="#" class="text-white me-4"><i class="fab fa-instagram"></i>Instagram</a>
        <a href="#" class="text-white"><i class="fab fa-twitter"></i>Twitter</a>
      </div>

    </div>
  </div>

  <div class="text-center mt-4">
    <p>© 2025 Easy Trip. All rights reserved.</p>
  </div>
</footer>
     </div>
   )
 }
 
 export default Footer
 