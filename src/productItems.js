import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
class Grid_item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            love: false
        }
    }
    render() {
        let styleLove_btn = this.state.love === false ? { backgroundColor: "#ffffff", color: 'rgb(255, 20, 147)' }
            : { backgroundColor: 'rgb(255, 20, 147)', color: '#ffffff' };
        const StyleLove_btn = (e) => {
            let newLove = !this.state.love
            this.setState({
                love: newLove
            })
            this.props.set_love(e)
        }
        return (
            <div>
                <div className='grid-item' key={this.props.index}>
                    <img src={this.props.img} alt={this.props.name} />
                    <div className='product-detail'>
                        <h3>{this.props.name}</h3>
                        <p>$.<span>{this.props.price}</span></p>
                        <div className='item-btn'>
                            <button onClick={() => StyleLove_btn(this.props.product)} style={styleLove_btn}><BsHeartFill /></button>
                            <button onClick={() => this.props.addToCart(this.props.product)}>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Grid_item