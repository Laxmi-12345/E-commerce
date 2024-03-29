import React, { createContext, useContext, useReducer } from 'react';
// import {faker} from '@faker-js/faker';
import * as faker from 'faker';
import cartReducer from './Reducers';
import { productReducer, AuthReducer } from './Reducers';

const cart = createContext(cartReducer);
faker.seed(99);

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDeliery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    const[productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    const [authState, authDispatch] = useReducer(AuthReducer, {
        usename:"",
        password: "",
        isLoggedIn: false,
        loginError: false
    });

  return (
    <cart.Provider value={{state, dispatch, productState, productDispatch, authState, authDispatch}}>
        {children}
    </cart.Provider>
  )
}

export default Context;

export const CartState = () => {
    return useContext(cart);
}
