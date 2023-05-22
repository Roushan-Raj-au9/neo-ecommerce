import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SearchBox.css'
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ history }) => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            navigate(`/products?key=${keyword}`)
        }
        else{
            navigate('/')
        }
    }

    return(
        <Form onSubmit={ submitHandler } className='d-flex' >
            <Form.Control 
             type='text' 
             name='q' 
             onChange={ (e) => setKeyword(e.target.value) } 
             placeholder='Search Products ...'
             className='mr-sm-2 ml-sm-5 search_box'
            >
            </Form.Control>  
            <Button type='submit' variant='outline-success' className='p-2 search_btn' >
                Search
            </Button>
        </Form>
    )
}

export default SearchBox;