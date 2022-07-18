import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import { Button, Dropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState, productDispatch } from '../Context/Context';
import {AiFillDelete} from 'react-icons/ai';

const Header = () => {

    const { 
        state : {cart},
        dispatch,
        productDispatch,
} = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text>
                <FormControl 
                placeholder='Search a product...'
                style={{width: 500}}
                className="m-auto"
                onChange={(e) => 
                productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload:e.target.value,
                })}
                >
                </FormControl>
            </Navbar.Text>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant='success'>
                    <FaShoppingCart style={{fontSize: 22}}/>
                    <Badge className='bg-success'>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {cart.length > 0 ? (
                            <>
                            {cart.map((prod) => (
                                <span className='cartItem' key={prod.id}>
                                    <img
                                      src={prod.image}
                                      className="cartItemImg"
                                      alt={prod.name}
                                      />
                                      <div className="cartItemDetail">
                                        <span>{prod.name}</span>
                                        <span> INR {prod.price.split(".")[0]} </span>
                                      </div>
                                      <AiFillDelete
                                      fontSize="20"
                                      style={{cursor: "pointer"}}
                                      onClick={() => 
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                      }
                                      />
                                </span>
                            ))}
                            <Link to="/cart">
                                <Button style={{width:"95%" , margin: "0 10px"}}>
                                    Go To Cart
                                </Button>
                            </Link>
                            </>
                        ) : (
                            <span style={{padding: 10}}>Cart is empty!</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header