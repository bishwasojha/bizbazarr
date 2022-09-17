export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };    
    case "ADD_TO_WISHLIST":
      return {...state, wishlist:[...state.wishlist, {...action.payload, qty:1 }] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((w)=> w.id !== action.payload.id),
      };
    case "CHANGE_WISHLIST_QTY":
      return {
        ...state,
        wishlist: state.wishlist.filter( (w)=> w.id === action.payload.id ? (w.qty = action.payload.qty) : w.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
    switch (action.type) {
      
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      default:
        return state;
    }
};

