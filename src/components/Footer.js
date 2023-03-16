import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
    <footer class="footer-distributed">
    
                <div class="footer-left">
    
                    <h3>Company<span>logo</span></h3>
    
                    <p class="footer-links">
                        {/* <a  class="link-1">Home</a>
                        
                        <a >Blog</a>
                    
                        <a >Pricing</a>
                    
                        <a >About</a>
                        
                        <a >Faq</a>
                        
                        <a >Contact</a> */}
                    </p>
    
                    <p class="footer-company-name">Company Name © 2015</p>
                </div>
    
                <div class="footer-center">
    
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>
    
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>
    
                    <div>
                        <i class="fa fa-envelope"></i>
                        {/* <p><a >support@company.com</a></p> */}
                    </div>
    
                </div>
    
                <div class="footer-right">
    
                    <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
    
                    <div class="footer-icons">
{/*     
                        <a ><i class="fa fa-facebook"></i></a>
                        <a ><i class="fa fa-twitter"></i></a>
                        <a ><i class="fa fa-linkedin"></i></a>
                        <a ><i class="fa fa-github"></i></a> */}
    
                    </div>
    
                </div>
    
            </footer></div>
  )
}

export default Footer