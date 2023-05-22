import React, { useContext, useEffect } from 'react'
import addressContext from '../context/address/addressContext'
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import productContext from '../context/product/productContext'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderSummary = () => {
    const { choosedAddress } = useContext(addressContext)
    const { cart, resetCart } = useContext(productContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (cart) {
            if (cart.length === 0) {
                navigate('/')
            }
        }
        //eslint-disable-next-line
    }, [])
    return (
        <Container>
            <Row>
                <Col md={4} className='mb-3'>
                    <h3>Address</h3>
                    <div>{choosedAddress?.adr}</div>
                    <div>{choosedAddress?.country} | {choosedAddress?.phone}</div>
                    <div>{choosedAddress?.pin} | {choosedAddress.city}</div>
                </Col>
                <Col md={2}>
                    <h3>Total Value</h3>
                    <div>total items : {cart?.reduce((acc, item) => acc + item.qty, 0)}</div>
                    <div>total price : ₹ {cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</div>
                    <Button className='btn-dark my-4'onClick={() => {
                        resetCart()
                         toast.success('Your Payment is Successful, Order Placed.', {
                            position: "top-center",
                            closeOnClick: true,
                        });
                        navigate('/')
                    }}>Pay Now</Button>
                </Col>
                <Col md={6}>
                    <h3>Items</h3>
                    {cart.map(({ _id, image, title, price, quantity, qty }) => <ListGroup.Item key={_id}>
                        <Row key={_id} className='mb-2'>
                            <Col md={2} >
                                <Image src={image} alt={title} rounded height='50px' width='83px' />
                            </Col>
                            <Col md={3} >
                                {title}
                            </Col>
                            <Col md={2} >
                                ₹{price}
                            </Col>
                        </Row>
                    </ListGroup.Item>)}
                </Col>

            </Row>
        </Container>
    )
}

export default OrderSummary