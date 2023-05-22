import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import productContext from '../../context/product/productContext'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayProduct = ({ products: { price, image, title, _id, quantity } }) => {
    const { cart, addToCart, addToWhislist, deleteWishlist, wishlist } = useContext(productContext);
    const navigate = useNavigate()
    const handleCart = () => {
        addToCart(_id, 1)
        toast.success('Item Added To Cart.', {
            position: "bottom-right",
            closeOnClick: true,
        });
    }
    const checkInCart = () => {
        let isExist = cart?.find(item => item._id === _id)
        if (isExist) return true
        return false
    }
    const checkInWhislist = () => {
        let isExist = wishlist?.find(item => item._id === _id)
        if(isExist) return true
        return false
    }
    return (
        <Card className='me-2' style={{ height: '300px', width: '340px',  }}>
            <Card.Img variant="top" src={image} height='161px' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>₹{price}</Card.Title>
                <Link to={`/product/${_id}`}>
                    <Button variant="primary" className='btn-dark'>Check Now</Button>
                </Link>
                {checkInCart() ?
                    <Button variant="primary" className='btn-dark mx-2' onClick={() => navigate('/cart')}>Go To Cart</Button> :
                    <Button variant="primary" className='btn-dark mx-2' disabled={quantity === 0} onClick={handleCart}>Add To Cart</Button>}
                {checkInWhislist() ?
                    <Button type='button' variant='light' className='mx-3'
                        onClick={() => {
                            deleteWishlist(_id)
                            toast.success('Item Removed From Wishlist.', {
                                position: "bottom-right",
                                closeOnClick: true,
                            });
                        }}
                    >
                        <i className="fa-solid fa-heart" style={{ color: '#FF1B1B' }}></i>
                    </Button> :
                    <Button type='button' variant='light' className='mx-3'
                        onClick={() => {
                            addToWhislist(_id)
                            toast.success('Item Added To Wishlist.', {
                                position: "bottom-right",
                                closeOnClick: true,
                            });
                        }}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </Button>}
            </Card.Body>
        </Card>
    )
}

export default DisplayProduct