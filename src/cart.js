import React from 'react';
import { MdShoppingCart } from 'react-icons/md'
import PaymentPlan from './payment-plan'
import CartItem from "./cartItem";
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enterCode: '',
            submitCode: '',
            discountCode: ['discount10%', 'discount20%'],
            styles: { display: 'none' },

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
        const popupPaymentPlan = () => {
            this.setState({
                styles: { display: 'block' },
                backgroundColor: { backgroundColor: 'rgba(0,0,0,0.5)' }
            })
        }
        const closePopup = () => {
            this.setState({
                styles: { display: 'none' }
            })
        }
        let total = Math.round(totalPrice() * 100) / 100;
        let tax = Math.round(totalPrice() * 1.01 / 100 * 100) / 100;
        let subtotal = Math.round((total + tax) * 100) / 100;
        return (
            <div className="cart" >
                <h2>Shopping cart</h2>
                <div className='grid grid-cart'>

                    {
                        this.props.cart.map((product, index) => (
                            <div className='grid-item cart-item'
                                key={index}>
                                <CartItem
                                    product={product}
                                    RemoveProduct={this.props.RemoveProduct}
                                    setQuantity={this.props.setQuantity}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="total">
                    <p>Total: <span>$ {total}</span></p>
                    <p>Tax: <span>$ {tax}</span></p>
                    <div className="discount">
                        <button onClick={() => handleSubmitCode()}>submit</button>
                        <input className="discount-input" type="text" placeholder="discount code" onChange={(e) => handleEnterCode(e.target.value)} value={this.state.enterCode}></input>

                    </div>
                    <p className='subtotal'>Subtotal: <span>$ {discount()}</span></p>
                    <div className='pay-btn'>
                        <button>Pay now</button>
                        <button onClick={() => popupPaymentPlan()}>Payment plan</button>
                    </div>
                </div>
                <button onClick={() => this.props.ChangePage()} className="changePage-btn">
                    <p className='changePageQuantity'>{this.props.totalQuantity}</p>
                    <MdShoppingCart /></button>
                <PaymentPlan total={total} styles={this.state.styles} closePopup={closePopup} />
                <div className='bg-modal' style={this.state.styles}></div>
            </div>
        )
    }
}
export default Cart