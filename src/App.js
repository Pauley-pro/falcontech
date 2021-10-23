import { Switch, Route } from 'react-router-dom'
import HomePage from './components/home-page'
import About from './components/About.js';
import NotFound from './components/not-found'
import Shop from './components/pages/shop/shop'
import SingleProduct from './components/single-product/single-product'
import CartPage from './components/pages/cart-page/cart-page'
import Checkout from './components/checkout/checkout'
import Success from './components/checkout/stripe-checkout/success'
import Canceled from './components/checkout/stripe-checkout/canceled'
import Scrollup from './components/Scrollup.js';




import './App.scss'

function App() {
  return (
    <div className="App">
     
        
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/success' component={Success} />
        <Route path='/canceled' component={Canceled} />
        <Route path='*' component={NotFound} />
      </Switch>
     
      <a
        href="https://wa.me/2347025007766"
        className="whatsapp_float"
        
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
          <Scrollup/>
    </div>
  )
}

export default App;
