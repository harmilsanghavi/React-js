import React, { useEffect } from 'react'
import { Alert, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';
import { ColorRing } from "react-loader-spinner";

export const Product = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if (status === StatusCode.LOADING) {
        return <ColorRing
            visible={true}
            height="30rem"
            width="20rem"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }
    if (status === StatusCode.ERROR) {
        return <Alert key="danger" variant='danger'>
            Something Went Wrong Please Try Again Leter
        </Alert>
    }
    const addToCart = (product) => {
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR. {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: 'white' }}>
                    <Button variant="primary" onClick={() => { addToCart(product) }}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div className='container'>
            <h1>Product Dashboard</h1>

            <div className="row">
                {cards}
            </div>
        </div>
    )
}
