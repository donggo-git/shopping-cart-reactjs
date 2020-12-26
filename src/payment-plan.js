import React from 'react';
import { GrClose } from 'react-icons/gr'
class PaymentPlan extends React.Component {

    render() {
        let total = this.props.total;
        let PaymentPlantFirst = { pay: Math.round(total / 12 * 100) / 100, howLong: 12 };
        let PaymentPlanSecond = { pay: 30.00, howLong: Math.round(total / 30) };

        return (
            <div className='payment-plan' style={this.props.styles}>
                <GrClose className='close-btn' onClick={() => this.props.closePopup()} />
                <h3>Your total is {total}</h3>
                <ul>
                    <li><p>payment plan: ${PaymentPlantFirst.pay}/month
                    for {PaymentPlantFirst.howLong} months</p>
                        <button>Choose</button>
                    </li>
                    <li><p>payment plan: ${PaymentPlanSecond.pay}/month
                    for {PaymentPlanSecond.howLong} months</p>
                        <button>Choose</button></li>
                </ul>
            </div>)
    }
}
export default PaymentPlan