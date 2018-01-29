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
        var body = document.getElementsByTagName('body')[0];
        if (window.location.hash === "#donate"){
            this.setState({open: true});
            body.setAttribute('data-state', 'is-modal');
        } else {
            this.setState({open: false});
            body.removeAttribute('data-state');
        }
    }
    handleClickDonate (ev) {

    }
    handleClickClose (ev) {
        //this.setState({open: false});
        window.location.hash = '';
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
                <div className="donation__inner">
                    <h1 className="donation__title">Donate now and together we can change more lives.</h1>
                    <AddressSection />
                    <button className="donation__btn donation__btn--close" type="button" onClick={this.handleClickClose}>Maybe later</button>
                    <button className="donation__btn" type="button" onClick={this.handleClickDonate}>Donate now!</button>
                    <div className="donation__graphic"><img className="" src="modules/assets/donationchart.png" alt=""/></div>
                
                </div>
            </form>
        )
    }
}

export default injectStripe(DonationForm);
