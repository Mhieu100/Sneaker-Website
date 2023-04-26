import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0
}

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.success(`Quantity of product is ${state.cartItems[itemIndex].cartQuantity}`)
            } else {
                const temp = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(temp)
                toast.success(`${action.payload.title} add to cart`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart : (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = removeItem
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            toast.success(`${action.payload.title} remove from cart`)
        },
        setIncreaseItemQty : (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.success(`Quantity of product is ${state.cartItems[itemIndex].cartQuantity}`)
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        setDecreaseItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.success(`Quantity of product is ${state.cartItems[itemIndex].cartQuantity}`)
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems))
         },
        setClearCartItems: (state, action) => {
            state.cartItems = []
            toast.success(`Clear cart items`)
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            
         },
        setGetTotal: (state, action) => {
            let { totalAmount,totalQuantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
                const totalPrice = price * cartQuantity
                cartTotal.totalAmount += totalPrice
                cartTotal.totalQuantity += cartQuantity
                return cartTotal
            }, {
                totalAmount: 0,
                totalQuantity: 0,
            })
            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity
        }
    }
})

export const { setCloseCart, setOpenCart, setAddItemToCart, setRemoveItemFromCart, setGetTotal, setIncreaseItemQty, setDecreaseItemQty, setClearCartItems } = CartSlice.actions
export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems
export const selectTotalAmount = (state) => state.cart.cartTotalAmount
export const selectTotalQty = (state) => state.cart.cartTotalQuantity
export default CartSlice.reducer