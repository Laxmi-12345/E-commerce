
const cartReducer = (state, action) => {
    console.error(state, action);
    switch(action.type){
        case "ADD_TO_CART":
          return {...state, cart: [...state.cart, { ...action.payload, qty: 1}]}
    
        case "REMOVE_FROM_CART":
            return {...state, cart: [...state.cart.filter((c)=> c.id!==action.payload.id)]}
            // let remianingItems = state.cart.filter((c)=> c.id!==action.payload.id)
            // return { ...state, cart: remianingItems.length === 0 ? [] : remianingItems }

        case "CHANGE_CART_QTY":
          return {
            ...state, 
            cart: state.cart.filter((c)=>
            c.id===action.payload.id? (c.qty=action.payload.qty):(c.qty)
            ),
          };
          default:
            return state;
    }
}

export default cartReducer;

export const productReducer = (state, action) => {
  switch(action.type){
    case "SORT_BY_PRICE":
      return {...state, sort: action.payload};
    case "FILTER_BY_STOCK":
      return {...state, byStock: !state.byStock};
    case "FILTER_BY_DELIVERY":
      return {...state, byFastDelivery: !state.byFastDelivery};
    case "FILTER_BY_RATING":
        return {...state, byRating: action.payload};
    case "FILTER_BY_SEARCH":
      return {...state, searchQuery: action.payload};
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      }
    default:
      return state;
  }
};

export const AuthReducer = (state, action) =>{
  console.log(state, action);
  switch (action.type){
    case "LOGIN_SUCCESS":
      return{
        ...state,
        USERNAME: "",
        PASSWORD: "",
        isLoggedIn: true
      }
        case "LOGIN_ERROR":
          return{
            ...state,
            loginError: "invalid",
          }
        case "LOG_OUT":
          return{
            ...state,
            isLoggedIn: false,
            loginError: false
          }
        case "USERNAME":
        return{
          ...state,
          username: action.value
        }
        case "PASSWORD":
          return{
            ...state,
            password: action.value
          }
  }
}