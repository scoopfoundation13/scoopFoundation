import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import AddressSection from './AddressSection';
// import CardSection from './CardSection';

class DonationForm extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false
        }
        this.handleClickDonate = this.handleClickDonate.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleHashChange = this.handleHashChange.bind(this);
    }
    handleHashChange () {
        if (window.location.hash === "#donate"){
            this.setState({open: true});
        } else {
            this.setState({open: false});
        }
    }
    handleClickDonate (ev) {

    }
    handleClickClose (ev) {
        this.setState({open: false});
    }
    handleSubmit (ev){
        // stop refresh
        ev.preventDefault();
/*
        this.props.stripe.createToken({name: "Jenny Rosen"}).then(({token}) => {
            console.log("Received Stripe token:", token);
        })*/
    }
    componentDidMount() {
        this.handleHashChange();
        window.addEventListener('hashchange', this.handleHashChange, false);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className={this.state.open ? 'donation donation--open' : 'donation donation--closed'}>
                <input type="text" value={this.state.open} />
                <AddressSection />
                <button type="button" onClick={this.handleClickDonate}>Confirm order</button>
                <button type="button" onClick={this.handleClickClose}>Close</button>
            </form>
        )
    }
}

export default injectStripe(DonationForm);
