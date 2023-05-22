import React, { useContext, useState } from 'react'
import addressContext from '../context/address/addressContext'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const Address = () => {
    const { address, setAddress, choosedAddress, setChoosedAddress } = useContext(addressContext)
    const navigate = useNavigate()
    const [currentAddress, setCurrentAddress] = useState({
        adr: '',
        city: '',
        pin: '',
        phone: '',
        country: '',
        _id: Date.now() + Math.random()
    })
    const [showEdit, setShowEdit] = useState(false)
    const { adr, city, pin, phone, country } = currentAddress;
    const handleChange = (e) => {
        setCurrentAddress({
            ...currentAddress,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (currentAddress.adr && currentAddress.city && currentAddress.pin && currentAddress.country && currentAddress.phone) {
            setAddress([...address, currentAddress])
            setCurrentAddress({
                adr: '',
                city: '',
                pin: '',
                phone: '',
                country: '',
                _id: Date.now() + Math.random()
            })
        } else {
            toast.error('All Credentials Required', {
                position: "bottom-right",
                closeOnClick: true,
            });
        }
    }
    const handleChooseAddress = (id) => {
        const findAdr = address.find(({_id}) => _id === id)
        setChoosedAddress(findAdr)
    }
    const handleProceed = () => {
        if(choosedAddress?.adr){
            navigate('/order-summary')
        }else{
            toast.error('Select an Address.', {
                position: "bottom-right",
                closeOnClick: true,
            });
        }
    }
    const handleEdit = (e) => {
        e.preventDefault()
        if (currentAddress.adr && currentAddress.city && currentAddress.pin && currentAddress.country && currentAddress.phone) {
            const findAdrIndex = address.findIndex(({_id}) => _id === currentAddress._id)
            address[findAdrIndex] = currentAddress
            setCurrentAddress({
                adr: '',
                city: '',
                pin: '',
                phone: '',
                country: '',
                _id: Date.now() + Math.random()
            })
            setShowEdit(false)
        } else {
            toast.error('All Credentials Required', {
                position: "bottom-right",
                closeOnClick: true,
            });
        }
    }
    return (
        <Container>
            <Row>
                <Col md={7}>
                    <h1>Select Address & <Button onClick={handleProceed}>Checkout</Button></h1>
                    <ListGroup variant='flush'>
                        {address.length > 0 && address.map((item, idx) => (
                            <Row key={idx}>
                                <Col md={1}>
                                <Form.Check
                                    type='radio'
                                    name='address'
                                    value={item?._id}
                                    // checked={categoryRange === 'kid'}
                                    onChange={() => handleChooseAddress(item?._id)}
                                />
                                </Col>
                                <Col md={6}>
                                    <div>{item?.adr}</div>
                                    <div>{item?.country} | {item?.phone}</div>
                                    <div>{item?.pin} | {item.city}</div>
                                </Col>
                                <Col>
                                <Button className='btn-dark me-2' onClick={() => {
                                    setShowEdit(true)
                                    const findAdr = address.find(({_id}) => _id === item._id)
                                    setCurrentAddress({
                                        adr: findAdr.adr,
                                        city: findAdr.city,
                                        pin: findAdr.pin,
                                        phone: findAdr.phone,
                                        country: findAdr.country,
                                        _id: findAdr._id
                                    })
                                }}>Edit</Button>
                                <Button className='btn-dark' onClick={() => {
                                    let filteredAddress = address.filter(({_id}) => _id !== item._id);
                                    setAddress(filteredAddress)
                                    setChoosedAddress({})
                                     setCurrentAddress({
                                        adr: '',
                                        city: '',
                                        pin: '',
                                        phone: '',
                                        country: '',
                                        _id: Date.now() + Math.random()
                                    })
                                }}>Delete</Button>
                                </Col>
                            </Row>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={5}>
                    <h3 className='text-center'>Add Address</h3>
                    <Form onSubmit={submitHandler} >
                        <Form.Group controlId='adr' className='mb-2'>
                            <Form.Label> Address </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first address"
                                name="adr"
                                value={adr}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='city' className='mb-2'>
                            <Form.Label>  City </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city name"
                                name="city"
                                value={city}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='pin' className='mb-2'>
                            <Form.Label> Pin Code </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter pin code"
                                name="pin"
                                value={pin}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='phone' className='mb-2'>
                            <Form.Label> Phone </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="Enter phone number"
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='country' className='mb-2'>
                            <Form.Label> Country </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="Enter country name"
                                name="country"
                                value={country}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        {
                            showEdit ? 
                        <Button variant='primary' className='my-2 btn-dark' onClick={handleEdit}>
                            Edit
                        </Button>:
                        <Button type='submit' variant='primary' className='my-2 btn-dark' >
                            Add
                        </Button>
                        }

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Address