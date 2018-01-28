import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import AddressSection from './AddressSection';
// import CardSection from './CardSection';

class DonationForm extends React.Component {
    handleSubmit (ev){
        // stop refresh
        ev.preventDefault();
/*
        this.props.stripe.createToken({name: "Jenny Rosen"}).then(({token}) => {
            console.log("Received Stripe token:", token);
        })*/
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <AddressSection />
                <button>Confirm order</button>
            </form>
        )
    }
}

export default injectStripe(DonationForm);
