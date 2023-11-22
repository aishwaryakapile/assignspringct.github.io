import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className='upper-footer mt-5 pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our Clients</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='col-md-4'>
            <h2>Our Clints</h2>
              <ul>
                <li>ABC</li>
                <li>XYZ</li>
                <li>POY</li>
                <li>RFv</li>
              </ul>
            </div>
            <div className='col-md-4'>
            <h2>Social Links</h2>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className='btm-footer pt-3'>
      <div className='container'>
          <div className='row'>
          <h5 className='text-center'>@copyright 2023</h5>
          </div>
          </div>
      </section>
    </>
  )
}

export default Footer