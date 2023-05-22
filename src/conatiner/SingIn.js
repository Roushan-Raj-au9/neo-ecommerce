import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const { loginUser, loading, login } = useContext(authContext)
    const [user, setuser] = useState({
        email: 'roushan@gmail.com',
        password: 'raj'
    })
    const { email, password } = user;
    useEffect(() => {
        if(userInfo && userInfo?.token){
            navigate('/')
        }
        //eslint-disable-next-line
    }, [])
    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (user.email && user.password) {
            login(user)
        } else {
            toast.error('Credentials Required', {
                position: "bottom-right",
                closeOnClick: true,
            });
        }
    }
    if (loginUser?.encodedToken) {
        let from = location.state?.from?.pathname || '/'
        navigate(from)
    }
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={4} className='form_auth'>
                    <h3 className='text-center'>Sign In</h3>
                    <Form onSubmit={submitHandler} >
                        <Form.Group controlId='email' >
                            <Form.Label> Email Address </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password' >
                            <Form.Label> Password </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' disabled={loading} variant='primary' className='my-2 btn-dark' >
                            {loading ? <Spinner />:'Sign In'}
                        </Button>

                    </Form>

                    <Row className='py-3' >
                        <Col>
                            New Customer ? <Link to='/signup' className='text-decoration-underline'> SingUp </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default SignIn