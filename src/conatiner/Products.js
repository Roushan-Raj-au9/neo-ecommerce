import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/product/productContext'
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import Filter from '../component/Filter/Filter';
import filterContext from '../context/filter/filterContext';
import DisplayProduct from '../component/DisplayProduct/DisplayProduct';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search)
    const path = queryParams.get("path")
    const pathkey = queryParams.get("key")
    const productContext = useContext(ProductContext)
    const { priceRange, ratingRange, sortRange, categoryRange } = useContext(filterContext)
    const { products, loading } = productContext;
    useEffect(() => {
        productContext.getProducts()
        //eslint-disable-next-line
    }, [])

    const dataBasedOnPrice = priceRange ? products?.filter(({ price }) => price <= priceRange) : products;
    const dataBasedOnRating = ratingRange ? dataBasedOnPrice?.filter(({ ratings }) => ratings >= ratingRange) : dataBasedOnPrice;
    const dataBasedOnSort = sortRange === 'lowtohigh' ? dataBasedOnRating?.sort((a, b) => a.price - b.price) : dataBasedOnRating?.sort((a, b) => b.price - a.price);
    const dataBasedOnCategory = categoryRange ? dataBasedOnSort?.filter((item) => categoryRange !== 'all' ? item.for.includes(categoryRange) : item) : dataBasedOnSort;
    const dataBasedOnPath = path ? dataBasedOnCategory?.filter(({ categoryName }) => path === categoryName) : dataBasedOnCategory
    const dataBasedOnSearch = pathkey ? dataBasedOnPath?.filter(({ title }) => title.toLowerCase().includes(pathkey.toLowerCase())) : dataBasedOnPath
    return (
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <aside className='px-5'>
                        <Filter />
                    </aside>
                </Col>
                <Col sm={9}>
                    {loading && dataBasedOnSearch.length === 0 && <div className='d-flex justify-content-center'><Spinner /></div>}
                    {!loading && dataBasedOnSearch.length === 0 && <div className='d-flex justify-content-center'><Alert variant='info'>No Data Found !</Alert></div>}
                `   <Button className="btn btn-dark my-3" onClick={() => navigate(-1)}>Go Back</Button>
                    <main className='d-flex flex-wrap display_product'>
                        {
                            dataBasedOnSearch && dataBasedOnSearch.length > 0 && dataBasedOnSearch.map((item) => (
                                <div className='mb-4 me-3' key={item._id} >
                                    <DisplayProduct products={item} />
                                </div>
                            ))
                        }
                    </main>
                </Col>
            </Row>
        </Container>
    )
}

export default Products