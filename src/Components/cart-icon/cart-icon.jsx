import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import './cart-icon.styles.scss'

const CartIcon = ({history}) => {
  const { itemCount } = useContext(CartContext)
  return (
    <div className="cart-container" onClick={() => history.push('/cart')}>
      
      {
        itemCount > 0 
        ? <span className="cart-count">{itemCount}</span> 
        : null
      }
      <HiOutlineShoppingBag  className="Shopbag"/>
    </div>
  )
}

export default withRouter(CartIcon)
