import React from 'react';
class PaymentPlan extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let total = this.props.total;
        let PaymentPlantFirst = { pay: Math.round(total / 12 * 100) / 100, howLong: 12 };
        let PaymentPlanSecond = { pay: 20, howLong: Math.round(total / 20) };
        return (
            <div>
                <h3>Your total is {total}</h3>
                <ul>
                    <li>first payment plan: ${PaymentPlantFirst.pay}/month for {PaymentPlantFirst.howLong} months</li>
                    <li>first payment plan: ${PaymentPlanSecond.pay}/month for {PaymentPlanSecond.howLong} months</li>
                </ul>
            </div>)
    }
}
export default PaymentPlan