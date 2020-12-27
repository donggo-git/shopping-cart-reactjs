import React from 'react';
import Cart from './cart';
import source from './source'
import Product from './product';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: source,
      cart: [],
      page: 'product',
      userName: ['Dong', 'Todoroki'],
      password: ['Dongpro12', 'HIGH&LOWseason2']
    }
  }
  render() {
    // add product to cart
    const addToCart = (product) => {
      let newCart = [...this.state.cart]
      let findItem = newCart.find(item => item.id === product.id);
      if (findItem) {
        findItem.quantity++;
      }
      else {
        findItem = {
          ...product,
          quantity: 1
        }
        newCart.push(findItem);
      }
      this.setState({ cart: newCart })
    }
    //Remove item from cart
    const RemoveFromCart = (productRemove) => {

      this.setState(pre => ({ cart: pre.cart.filter((product) => product !== productRemove) }))
    }
    //calculate total quantity in the cart
    const totalQuantity = () => {
      return this.state.cart.reduce((sum, { quantity }) => sum + Number(quantity), 0)
    }
    //change page
    const ChangePage = (cartPage) => {
      switch (cartPage) {
        case 'product':
          if (totalQuantity() > 0) {
            this.setState({ page: 'cart' });
          }
          else {
            alert("there isn't anything in the cart")
          }
          break;
        default: this.setState({ page: 'product' });
          break;
      }

    }
    //change quantity in the cart
    const setQuantity = (product, e) => {
      let newCart = [...this.state.cart]
      let findItem = newCart.find(item => item.id === product.id);
      findItem.quantity = e;
      this.setState({ cart: newCart })
    }

    const set_love = (product) => {

      let newSource = [...this.state.source];
      let findItem = newSource.find(item => item.id === product.id);
      findItem.loved = !findItem.loved
      this.setState({ source: newSource })
      console.log(findItem.loved)
    }

    return (
      <div>



        {this.state.page === 'product' && <Product
          product={this.state.source} addToCart={addToCart} set_love={set_love}
          ChangePage={() => ChangePage(this.state.page)} totalQuantity={totalQuantity()} source={this.state.source} />}
        {this.state.page === 'cart' && <Cart cart={this.state.cart}
          RemoveProduct={RemoveFromCart} setQuantity={setQuantity}
          ChangePage={() => ChangePage(this.state.page)} totalQuantity={totalQuantity()} />}
      </div>
    );
  }
}



export default App;
