import React, { useContext, useEffect } from 'react';
import Carousel from '../component/Carousel/Carousel';
import { Container } from 'react-bootstrap';
import Cards from '../component/CategoryCard.js/Card';
import CategoryContext from '../context/category/categoryContext';

const Home = () => {
  const categoryContext = useContext(CategoryContext)
  const { categories, loading } = categoryContext;
  useEffect(() => {
      categoryContext.getCategories()
      //eslint-disable-next-line
  }, [])
  return (
    <>
    <Container>
     <Carousel />
     <Cards categories={categories} loading={loading} />
    </Container>

    </>
  )
}

export default Home