import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedDonationForm from './DonationForm';

class ScoopDonation extends React.Component {
    render () {
        return (
            <Elements>
                <InjectedDonationForm />
            </Elements>
        )
    }
}

export default ScoopDonation;
