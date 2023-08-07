import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../store/cartSlice'

export const Cart = () => {
    const products=useSelector(state=>state.cart);
    const dispatch=useDispatch()
    const removeToCart = (id) =>{
        dispatch(remove(id))
    }
    
    const cards = products.map(product => (
        <div className="col-md-12" style={{ marginBottom: '10px' }}>
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
                <Card.Footer style={{backgroundColor:'white'}}>
                    <Button variant="danger" onClick={()=> removeToCart(product.id)}>Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ));
  return (
    <div>
        <h1>Cart</h1>
        <div className='row'>
            {cards}
        </div>
    </div>
  )
}
