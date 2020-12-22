import React from 'react';
import { MdShoppingCart } from 'react-icons/md'
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enterCode: '',
            submitCode: '',
            discountCode: ['discount10%', 'discount20%']
        }
    }
    render() {
        const totalPrice = () => {
            return this.props.cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
        }
        const handleEnterCode = (e) => {
            this.setState({ enterCode: e })
        }
        const handleSubmitCode = () => {
            this.setState({
                submitCode: this.state.enterCode,
                enterCode: ''
            })
        }
        const discount = () => {
            if (this.state.submitCode === "") {
                return subtotal;
            }
            else {
                switch (this.state.discountCode.indexOf(this.state.submitCode)) {
                    case 0: return Math.round((subtotal - subtotal * 10 / 100) * 100) / 100;
                    case 1: return Math.round((subtotal - subtotal * 20 / 100) * 100) / 100;
                    default: return subtotal + ' Wrong code';
                }
            }
        }
        let total = Math.round(totalPrice() * 100) / 100;
        let tax = Math.round(totalPrice() * 1.01 / 100 * 100) / 100;
        let subtotal = Math.round((total + tax) * 100) / 100;
        return (
            <div className="cart">
                <h2>Shopping cart</h2>
                <div className='grid grid-cart'>

                    {
                        this.props.cart.map((product, index) => (
                            <div className='grid-item cart-item' key={index}>
                                <img src={product.img} alt={product.name} height="100%" />
                                <div className='product-detail cart-detail'>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p>blablblbdbsdavsdviondv sdkv diovnasdv fin</p>
                                        <input
                                            value={product.quantity}
                                            onChange={(e) => { this.props.setQuantity(product, e.target.value) }}
                                            type="number"
                                            className="input-quantity"
                                        />
                                        <div><button onClick={() => this.props.RemoveProduct(product)} className="remove-btn">remove</button></div>
                                    </div>


                                    <p className="price">$<span>{Math.round(product.price * product.quantity * 100) / 100}</span></p>


                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="total">
                    <p>Total: <span>$ {total}</span></p>
                    <p>Tax: <span>$ {tax}</span></p>
                    <p>Subtotal: <span>$ {discount()}</span></p>
                    <div className="discount">
                        <input className="discount-input" type="text" placeholder="discount code" onChange={(e) => handleEnterCode(e.target.value)} value={this.state.enterCode}></input>
                        <button onClick={() => handleSubmitCode()}>submit</button>
                    </div>
                    <button>Pay now</button>
                    <button>Payment plan</button>
                </div>
                <button onClick={() => this.props.ChangePage()} className="changePage-btn">
                    <p className='changePageQuantity'>{this.props.totalQuantity}</p>
                    <MdShoppingCart /></button>
            </div>
        )
    }
}
export default Cart