import React from 'react'
import "./Home.css"
import { Button } from '@mui/material'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Product from '../../components/product/Product'
import { SlScreenSmartphone } from 'react-icons/sl'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { BsSmartwatch } from 'react-icons/bs'
import { IoCameraOutline, IoGameControllerOutline } from 'react-icons/io5'
import { CiHeadphones } from 'react-icons/ci'

function Home() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero_menu">
                        <h3>Woman’s Fashion</h3>
                        <h3>Men’s Fashion</h3>
                        <h3>Electronics</h3>
                        <h3>Home & Lifestyle</h3>
                        <h3>Medicine</h3>
                        <h3>Sports & Outdoor</h3>
                        <h3>Baby’s & Toys</h3>
                        <h3>Groceries & Pets</h3>
                        <h3>Health & Beauty</h3>
                    </div>
                    <div className="hero_img">
                        {/* <div className="hero_infoPart">
                            <div className="mark_phone">
                                <img src="/img/apple.svg" alt="" />
                                <h4>iPhone 14 Series</h4>
                            </div>
                            <h1>Up to 10% off Voucher</h1>
                            
                        </div> */}
                        <img src="/img/heroImg.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="days_work">
                <div className="container">
                    <div className="today">
                        <div className="row"></div>
                        <h3>Today’s</h3>
                    </div>
                    <div className="days_card">
                        <h1 className='blow'>Flash Sales</h1>
                        <div className="time">
                            <div className="tip_time">
                                <h5>Days</h5>
                                <h3>03</h3>
                            </div>
                            <span>:</span>
                            <div className="tip_time">
                                <h5>Hours</h5>
                                <h3>23</h3>
                            </div>
                            <span>:</span>
                            <div className="tip_time">
                                <h5>Minutes</h5>
                                <h3>19</h3>
                            </div>
                            <span>:</span>
                            <div className="tip_time">
                                <h5>Seconds</h5>
                                <h3>56</h3>
                            </div>

                        </div>
                        <div className="day_slider">
                            <Button variant="outlined"><FaArrowLeft /></Button>
                            <Button variant="outlined"><FaArrowRight /></Button>
                        </div>
                    </div>
                    <div className="products_card">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <Button className='btn' variant='outlined'> View All Products</Button>
                </div>
            </section>
            <section className="cotegories">
                <div className="container">
                    <div className="today">
                        <div className="row"></div>
                        <h3>Categories</h3>
                    </div>
                    <div className="cotegories_slider">
                        <h1 className="blow">Browse By Category</h1>
                        <div className="day_slider">
                            <Button variant="outlined"><FaArrowLeft /></Button>
                            <Button variant="outlined"><FaArrowRight /></Button>
                        </div>
                    </div>
                    <div className="cotegories_card">
                        <div className="cotegories_box">
                            <SlScreenSmartphone />
                            <h3>Phones</h3>
                        </div>
                        <div className="cotegories_box">
                            <HiOutlineComputerDesktop />
                            <h3>Computers</h3>
                        </div>
                        <div className="cotegories_box">
                            <BsSmartwatch />
                            <h3>SmartWatch</h3>
                        </div>
                        <div className="cotegories_box">
                            <IoCameraOutline />
                            <h3>Camera</h3>
                        </div>
                        <div className="cotegories_box">
                            <CiHeadphones />
                            <h3>HeadPhones</h3>
                        </div>
                        <div className="cotegories_box">
                            <IoGameControllerOutline />
                            <h3>Gaming</h3>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
            <section className="selling_products">
                <div className="container">
                    <div className="today">
                        <div className="row"></div>
                        <h3>This Month</h3>
                    </div>
                    <div className="selling_view">
                        <h1 className="blow">Best Selling Products</h1>
                        <Button className='btn' variant='outlined'>View All</Button>
                    </div>
                    <div className="sellings">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <img className='rek' src="/img/reklama.png" alt="" />
                </div>
            </section>
            <section className="products_all">
                <div className="container">
                    <div className="today">
                        <div className="row"></div>
                        <h3>Our Products</h3>
                    </div>
                    <div className="cotegories_slider">
                        <h1 className="blow">Explore Our Products</h1>
                        <div className="day_slider">
                            <Button variant="outlined"><FaArrowLeft /></Button>
                            <Button variant="outlined"><FaArrowRight /></Button>
                        </div>
                    </div>
                    <div className="all_pro">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <Button className='btn' variant='outlined'> View All Products</Button>

                </div>
            </section>
            <section className="new_collages">
                <div className="container">
                    <div className="today">
                        <div className="row"></div>
                        <h3>Today’s</h3>
                    </div>
                    <h1 className="blow">New Arrival</h1>
                    <div className="collages_card">
                        <div className="part_one">
                            <img src="/img/part1.png" alt="" />
                        </div>
                        <div className="part_two">
                            <div className="part_two__top">
                                <img src="/img/part21.png" alt="" />
                            </div>
                            <div className="part_two__bottom">
                                <img src="/img/part22.png" alt="" />
                                <img src="/img/part23.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="services">
                        <div className="services_card">
                            <img src="/img/Services1.svg" alt="" />
                            <h3>FREE AND FAST DELIVERY</h3>
                            <h4>Free delivery for all orders over $140</h4>
                        </div>
                        <div className="services_card">
                            <img src="/img/Services2.svg" alt="" />
                            <h3>24/7 CUSTOMER SERVICE</h3>
                            <h4>Friendly 24/7 customer support</h4>
                        </div>
                        <div className="services_card">
                            <img src="/img/Services3.svg" alt="" />
                            <h3>MONEY BACK GUARANTEE</h3>
                            <h4>We reurn money within 30 days</h4>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
