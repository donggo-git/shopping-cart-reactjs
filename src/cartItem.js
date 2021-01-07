import React from 'react'
class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleForRemoveCart: false
        }
    }
    render() {
        const styleForRemoveCart = () => {

        }
        return (
            <div>
                <img src={this.props.product.img} alt={this.props.product.name} height="100%" />
                <div className='product-detail cart-detail'>
                    <div className='cart-content'>
                        <h3>{this.props.product.name}</h3>
                        <p>blablblbdbsdavsdviondv sdkv diovnasdv fin</p>
                        <input
                            value={this.props.product.quantity}
                            onChange={(e) => { this.props.setQuantity(this.props.product, e.target.value) }}
                            type="number"
                            className="input-quantity"
                        />
                        <div><button onClick={() => this.props.RemoveProduct(this.props.product)} className="remove-btn">remove</button></div>
                    </div>


                    <p className="price">$<span>{Math.round(this.props.product.price * this.props.product.quantity * 100) / 100}</span></p>


                </div>
            </div>)
    }
}
export default CartItem