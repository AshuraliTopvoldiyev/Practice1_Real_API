import React from 'react'
import "./Product.css"
import Rating from '@mui/material/Rating'
import { FaRegHeart } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'
import { Button } from '@mui/material'

function Product({ item }) {
    console.log(item);

    return (
        <>
            <section className="product">
                <div className="product_img">
                    <img src={`https://ecommercev01.pythonanywhere.com/${item?.pictures[0]}`} alt="" />
                    <div className="like_icons">
                        <button> <FaRegHeart /></button>
                        <button><IoEyeOutline /></button>
                    </div>
                    <div className="foiz">
                        <h4>-40%</h4>
                    </div>
                    <Button className='add' variant='outlined'> Add To Cart</Button>
                </div>
                <div className="product_info">
                    <h3>{item?.title.slice(0, 23)}...</h3>
                    <div className="prices">
                        <h4>$<span>{item?.discount_price}</span></h4>
                        <h5>$<span>{item?.price}</span></h5>
                    </div>
                    <div className="reyting">
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        <h5>( <span>{item?.stars}</span> )</h5>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Product
