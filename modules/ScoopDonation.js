import React from 'react';
import {Elements} from 'react-stripe-elements';

import stripeTestKeys from '../stripeTestKeys';
import { StripeProvider } from 'react-stripe-elements';

import InjectedDonationForm from './DonationForm';

class ScoopDonation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stripe: null
        };
    }
    componentDidMount() {
        if (window.Stripe) {
            console.log('1 process.env.STRIPE_PUBLIC_LIVE', process.env.STRIPE_PUBLIC_LIVE);
            this.setState({stripe: window.Stripe(process.env.STRIPE_PUBLIC_LIVE)});
        } else {
            if (document.querySelector('#stripe-js') !== null) {
                document.querySelector('#stripe-js').addEventListener('load', () => {
                    // Create Stripe instance once Stripe.js loads
                    console.log('2 process.env.STRIPE_PUBLIC_LIVE', process.env.STRIPE_PUBLIC_LIVE);
                    this.setState({stripe: window.Stripe(process.env.STRIPE_PUBLIC_LIVE)});
                });
            }
        }
    }
    render () {
        return (
            <StripeProvider stripe={this.state.stripe}>
                <Elements>
                    <InjectedDonationForm />
                </Elements>
            </StripeProvider>
        )
    }
}

export default ScoopDonation;
