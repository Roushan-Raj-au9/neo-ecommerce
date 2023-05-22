import { Button, Container } from "react-bootstrap"
import DisplayDetail from "../component/ProductDetail/DisplayDetail"
import productContext from "../context/product/productContext"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"


const DisplayProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { product, loading, getProduct } = useContext(productContext)
  useEffect(() => {
    getProduct(id)
    //eslint-disable-next-line
  }, [])
  return (
    <Container>
      <Button className="btn btn-dark my-3" onClick={() => navigate(-1)}>Go Back</Button>
      <DisplayDetail product={product} loading={loading} />
    </Container>
  )
}

export default DisplayProductDetail