import React,{useContext, useEffect} from 'react';
import VerticalModal from './VerticalModal';
import CartContext from '../../context/cartContext';
import CartItems from './CartItems';



const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id);
    };
const cartItemAddHandler=(item)=>{
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      totalQuantity: 1,
      price: item.price,    });
}  
useEffect(()=>{

},[props.cartData,cartCtx])

console.log(cartCtx.items)
const cartItems = cartCtx.items.map((item) => {
  console.log(cartCtx.items)
  return (
    <CartItems
      key={item.id}
      title={item.title}
      totalQuantity={item.totalQuantity}
      price={item.price}
      onAdd={() => cartItemAddHandler(item)}
      onRemove={() => cartItemRemoveHandler(item.id)}
    />
  );
});
console.log(cartItems)

  return (
    <><VerticalModal show={props.show} onHide={props.onHide} cartItems={cartItems} totalAmount={totalAmount}/></>
  );
};

export default Cart;
