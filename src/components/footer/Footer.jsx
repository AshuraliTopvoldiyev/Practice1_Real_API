import React from 'react'
import "./Footer.css"
import { VscSend } from 'react-icons/vsc'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <section className="footer">
                <div className="container">
                    <div className="links_box">
                        <div className="footer_links">
                            <h3>Exclusive</h3>
                            <h4>Subscribe</h4>
                            <h4>Get 10% off your first order</h4>
                            <form action="">
                                <input type="text" placeholder='Enter your email' />
                                <VscSend />
                            </form>
                        </div>
                        <div className="footer_links">
                            <h3>Support</h3>
                            <h4>111 Bijoy sarani, Dhaka,  <br />DH 1515, Bangladesh.</h4>
                            <h4>exclusive@gmail.com</h4>
                            <h4>+88015-88888-9999</h4>
                        </div>
                        <div className="footer_links">
                            <h3>Account</h3>
                            <h4>My Account</h4>
                            <h4>Login / Register</h4>
                            <h4>Cart</h4>
                            <h4>Wishlist</h4>
                            <h4>Shop</h4>
                        </div>
                        <div className="footer_links">
                            <h3>Account</h3>
                            <h4>Privacy Policy </h4>
                            <h4>Terms Of Use </h4>
                            <h4>FAQ </h4>
                            <h4>Contact </h4>

                        </div>
                        <div className="footer_links">
                            <h3>Download App</h3>
                            <h5>Save $3 with App New User Only</h5>
                            <div className="scaner_links">
                                <img src="/img/qr.svg" alt="" />
                                <div className="play_markets">
                                    <img src="/img/Gplay.svg" alt="" />
                                    <img src="/img/appstore.svg" alt="" />
                                </div>
                            </div>

                            <div className="footer_icons">
                                <Link><FaFacebookF /></Link>
                               <Link> <FiTwitter /></Link>
                                <Link><FaInstagram /></Link>
                               <Link> <FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <h5 className='bottom_footer'>@ Copyright Rimel 2022. All right reserved</h5>
                </div>
            </section>

        </>
    )
}

export default Footer
