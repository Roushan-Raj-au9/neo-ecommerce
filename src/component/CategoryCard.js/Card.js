import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cards = ({categories, loading}) => {
    return (
        <>
            <Row className='mt-4'>
                {loading && categories.length === 0 && <div className='d-flex justify-content-center'><Spinner /></div>}
                {
                    categories?.map(({ categoryName, image, description, _id }) => (
                        <Col className='d-flex' key={_id}>
                            <Link to={`/products?path=${categoryName}`}>
                            <Card className='me-2'>
                                <Card.Img variant="top" src={image} height='161px' />
                                <Card.Body>
                                    <Card.Title>{`${categoryName}`.toUpperCase()}</Card.Title>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                    <Button variant="primary" className='btn-dark'>Check Now</Button>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>

                    ))
                }
            </Row>
        </>
    )
}

export default Cards;