import { useContext, useState } from 'react'
import { Button, Card, Col, Image, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import productContext from '../../context/product/productContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayDetail = ({ product: { _id, image, title, price, description, ratings, review, quantity, comments }, loading }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    //eslint-disable-next-line
    const [quantitys, setQuantity] = useState(1)
    const { cart, addToWhislist, deleteWishlist, wishlist } = useContext(productContext);
    const handleAddToCart = () => {
        navigate(`/cart/${id}?qty=${quantitys}`)
    }
    const checkInCart = () => {
        let isExist = cart?.find(item => item._id === _id)
        if (isExist) return true
        return false
    }
    const checkInWhislist = () => {
        let isExist = wishlist?.find(item => item._id === _id)
        if (isExist) return true
        return false
    }
    return (
        <>
            <Row>
                {loading && !_id ? <div className='d-flex justify-content-center'><Spinner /></div> : <>
                    <Col md={6} >
                        <Image src={image} alt={title} width='613px' height='400px' />
                    </Col>
                    <Col md={3} >
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{title}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className='rating d-flex justify-content-between' >
                                    <span>{ratings}{' '}<i style={{ color: '#f8e825' }} className='fas fa-star'></i></span>
                                    <span>{review} review</span>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ₹{price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} >
                        <Card>
                            <ListGroup variant='flush' >
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>₹{price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {quantity > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {quantity > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Quantity:</Col>
                                            <Col className='d-flex justify-content-around'>
                                                {quantitys}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                                }
                                <ListGroup.Item>
                                    {checkInCart() ?
                                        <Button variant="primary" className='btn-dark mx-2' onClick={() => navigate('/cart')}>Go To Cart</Button> :
                                        <Button
                                            className='btn-dark btn-block'
                                            type='button'
                                            disabled={quantity === 0}
                                            onClick={handleAddToCart}
                                        >
                                            Add To Cart
                                        </Button>}
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
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </>
                }
            </Row>
            {!loading && <Row className='my-4'>
                <Col md={6}>
                    <h4>REVIEWS</h4>
                    <ListGroup>
                        {comments && comments.length > 0 && comments?.map(({ name, rating, text, date }, idx) => (
                            <ListGroup.Item key={idx} >
                                <strong>{name}</strong>
                                <div>{rating}{' '}<i style={{ color: '#f8e825' }} className='fas fa-star'></i></div>
                                <p>{date}</p>
                                <p>{text}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>}
        </>
    )
}

export default DisplayDetail