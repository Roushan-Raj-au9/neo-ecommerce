import React, { useContext, useEffect } from 'react'
import { Alert, Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productContext from '../context/product/productContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
    //eslint-disable-next-line
    const { cart, loading, addToCart, updateCart, deleteItemOfCart, addToWhislist, wishlist, deleteWishlist, getWishlist } = useContext(productContext);
    useEffect(() => {
        getWishlist()
        //eslint-disable-next-line
    }, [])
    const checkInCart = (id) => {
        let isExist = cart?.find(item => item._id === id)
        if (isExist) return isExist.qty
        return false
    }
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Shopping Wishlist</h1>
                    {wishlist.length === 0 ? <Alert variant='warning'>Your Wishlist is Empty ! <Link to='/' className='text-primary text-decoration-underline'>Add Items To Wishlist</Link></Alert> : (
                        <ListGroup variant='flush'>
                            {wishlist.map(({ _id, image, title, price, quantity, qty }) => <ListGroup.Item key={_id}>
                                <Row>
                                    <Col md={2} >
                                        <Image src={image} alt={title} rounded height='55px' width='118px' />
                                    </Col>
                                    <Col md={3} >
                                        <Link to={`/product/${_id}`} className='link-primary'>
                                            {title}
                                        </Link>
                                    </Col>
                                    <Col md={2} >
                                        ₹{price}
                                    </Col>
                                    <Col md={2} className='d-flex justify-content-around' >
                                        <Button
                                            className='btn-dark btn-block'
                                            type='button'
                                            style={{ height:'37px',width:'44px' }}
                                            disabled={quantity === 0}
                                            onClick={() => {
                                                let isExist = cart?.find(item => item._id === _id)
                                                if(isExist){
                                                    updateCart(_id, 'increment')
                                                }else{
                                                    addToCart(_id)
                                                }
                                                toast.success('Item Added To Cart.', {
                                                    position: "bottom-right",
                                                    closeOnClick: true,
                                                });
                                            }}
                                        >
                                            <i className='fas fa-shopping-cart' ></i>
                                        </Button>
                                        {checkInCart(_id) && <Button disabled style={{width:'34px', height:'37px'}}className=''>{checkInCart(_id)}</Button>}
                                    </Col>
                                    <Col md={3} >
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
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)}
                        </ListGroup>)}
                </Col>
            </Row>
        </Container>
    )
}

export default Wishlist;