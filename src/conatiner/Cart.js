import React, { useContext, useEffect } from 'react'
import { Alert, Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import productContext from '../context/product/productContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const qty = queryParams.get('qty')
    //eslint-disable-next-line
    const { cart, loading, addToCart, updateCart, deleteItemOfCart, addToWhislist, wishlist, deleteWishlist} = useContext(productContext);
    useEffect(() => {
        if (id) {
            addToCart(id, qty)
        }
        //eslint-disable-next-line
    }, [id, qty])
    const checkInWhislist = (id) => {
        let isExist = wishlist?.find(item => item._id === id)
        if(isExist) return true
        return false
    }
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cart.length === 0 ? <Alert variant='warning'>Your Cart is Empty ! <Link to='/' className='text-primary text-decoration-underline'>Add Items To Cart</Link></Alert> : (
                        <ListGroup variant='flush'>
                            {cart.map(({ _id, image, title, price, quantity, qty }) => <ListGroup.Item key={_id}>
                                <Row>
                                    <Col md={2} >
                                        <Image src={image} alt={title} rounded height='55px' width='118px'/>
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
                                        <h3 onClick={() => {
                                            qty > 1 && updateCart(_id, 'decrement')
                                            toast.success('Item Removed To Cart.', {
                                                position: "bottom-right",
                                                closeOnClick: true,
                                            });
                                        }} style={{ cursor: 'pointer' }}>-</h3>
                                        <Button disabled style={{ height: '37px' }}>{qty}</Button>
                                        <h3 onClick={() => {
                                            updateCart(_id, 'increment')
                                            toast.success('Item Added To Cart.', {
                                                position: "bottom-right",
                                                closeOnClick: true,
                                            });
                                        }} style={{ cursor: 'pointer' }}>+</h3>
                                    </Col>
                                    <Col md={3} >
                                        <Button type='button' variant='light'
                                            onClick={() => {
                                                deleteItemOfCart(_id)
                                                toast.success('Item Deleted To Cart.', {
                                                    position: "bottom-right",
                                                    closeOnClick: true,
                                                });
                                            }}
                                        >
                                            <i className='fas fa-trash' ></i>
                                        </Button>
                                        { checkInWhislist(_id) ? 
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
                                        </Button>:
                                        <Button type='button' variant='light' className='mx-3'
                                            onClick={() => {
                                                addToWhislist(_id,qty)
                                                toast.success('Item Added To Wishlist.', {
                                                    position: "bottom-right",
                                                    closeOnClick: true,
                                                });
                                            }}
                                        > 
                                            <i className="fa-regular fa-heart"></i>
                                        </Button>

                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>)}
                        </ListGroup>)}
                </Col>
                <Col md={4} >
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Subtotal ({cart?.reduce((acc, item) => acc + item.qty, 0)}) items </h2>
                                price ₹ {cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button type='button'
                                    className='btn-block btn-dark'
                                    disable={(cart.length === 0).toString()}
                                    onClick={() =>{
                                        if(cart.length !== 0){
                                            navigate('/address')
                                        }
                                    }}
                                >
                                    Proceed To Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>

            </Row>
        </Container>
    )
}

export default Cart