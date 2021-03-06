import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import Grid_item from "./productItems";
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'all',
            love: false,
            styles: {
                border: 'none',
                backgroundColor: 'rgb(252, 198, 52)'
            },
            color: [
                {
                    color: 'red',
                    value: false
                },
                {
                    color: 'black',
                    value: false,
                },
                {
                    color: 'white',
                    value: false
                },
                {
                    color: 'blue',
                    value: false
                }
            ],

        }
    }
    render() {

        var Apple = 'Apple';
        var Samsung = 'Samsung';
        let products = this.props.product;
        const getProductByFilter = () => {
            //if select is 'all'
            if (this.state.brand === 'all') {
                if (this.state.color.every(cl => cl.value === false)) {
                    if (this.state.love) { return products.filter(product => getLoveItem(product)); }
                    else {
                        return products;
                    }
                }
                else {
                    if (this.state.love) { return products.filter(product => getLoveItem(product) && getProductByColor(product)); }
                    else { return products.filter(product => getProductByColor(product)) }
                }
            }
            else {
                if (this.state.color.every(cl => cl.value === false)) {
                    if (this.state.love) { return products.filter(product => getLoveItem(product) && getProductByBrand(product)); }
                    else {
                        return products.filter(product => getProductByBrand(product));
                    }
                }
                else {
                    if (this.state.love) { return products.filter(product => getLoveItem(product) && getProductByBrand(product) && getProductByColor(product)); }
                    else { return products.filter(product => getProductByBrand(product) && getProductByColor(product)) }
                }
            }

        }

        const getProductByBrand = (e) => {
            return e.brand === this.state.brand
        }
        const setBrand = (e) => {
            this.setState({
                brand: e.target.value
            })
        }
        const setLoved = () => {
            this.setState((pre) => ({
                love: !pre.love
            }))
            if (this.state.love === false) {
                this.setState({ styles: { border: '1.5px solid  rgb(252, 198, 52)', backgroundColor: '#ffffff', } })
            }
            else {
                this.setState({ styles: { border: 'none', backgroundColor: 'rgb(252, 198, 52)' } })
            }
        }
        const getLoveItem = (e) => {

            return e.loved === this.state.love;

        }
        const setColor = (e) => {
            let newColor = [...this.state.color];
            let findColor = newColor.find(colorTarget => colorTarget.color === e)
            findColor.value = !findColor.value;
            this.setState({
                color: newColor
            })

        }
        const getProductByColor = (e) => {
            //let colorNeed = product.color;
            let colorAvailable = [...this.state.color].filter(color => color.value === true);
            let arr = colorAvailable.map(obj => Object.values(obj).filter(need => typeof need != 'boolean').join(''));
            return arr.indexOf(e.color) > -1;

        }
        return (

            <div className="product-page">

                {console.log(this.state.brand)}
                <h1 >Shopping</h1>
                <div className='filter-form'>
                    <select className='select' onChange={(e) => setBrand(e)}>
                        <option value='all'>All</option>
                        <option value={Apple}>{Apple}</option>
                        <option value={Samsung}>{Samsung}</option>
                    </select>
                    <div className='checkbox-list'>
                        <label className="checkbox-container red">
                            <input type="checkbox" name="color" value="red" onChange={(e) => setColor(e.target.value)} />
                            <span className='checkmark' id="red"></span>
                        </label>
                        <label className="checkbox-container black">
                            <input type="checkbox" name="color" value="black" onChange={(e) => setColor(e.target.value)} />
                            <span className='checkmark' id="black"></span>
                        </label>
                        <label className="checkbox-container white">
                            <input type="checkbox" name="color" value="white" onChange={(e) => setColor(e.target.value)} />
                            <span className='checkmark' id="white"></span>
                        </label>
                        <label className="checkbox-container blue">
                            <input type="checkbox" name="color" value="blue" onChange={(e) => setColor(e.target.value)} />
                            <span className='checkmark' id="blue"></span>
                        </label>
                    </div>
                    <button style={this.state.styles} onClick={() => setLoved()}
                        className="love-btn">loved items</button>
                </div>
                <div className='grid'>

                    {
                        getProductByFilter().map((product, index) => (
                            <Grid_item
                                product={product} index={index} img={product.img} name={product.name}
                                price={product.price}
                                set_love={this.props.set_love}
                                addToCart={this.props.addToCart}
                                love={this.state.love}
                                key={product.id} />

                        ))
                    }
                </div>
                <button onClick={() => this.props.ChangePage()} className="changePage-btn">
                    <span className="changePageQuantity">{this.props.totalQuantity}</span>
                    <MdShoppingCart /></button>
            </div>)
    }
}
export default Product