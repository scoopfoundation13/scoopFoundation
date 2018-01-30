import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import {CardElement} from 'react-stripe-elements';

class DonationForm extends React.Component {
    constructor(){
        super();
        this.state = {
            "error": "",
            "open": false,
            "donationFormName": "",
            "donationFormCompany": "",
            "donationFormEmail": "",
            "donationFormMessage": ""
        }
        this.handleClickDonate = this.handleClickDonate.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleHashChange = this.handleHashChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleError = this.handleError.bind(this);
        
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
    handleInputChange (ev) {
        var newState = {};
        newState[ev.target.name] = ev.target.value;
        this.setState(newState);
    }
    handleClickDonate (ev) {

    }
    handleClickClose (ev) {
        //this.setState({open: false});
        window.location.hash = '';
    }
    handleError (error){
        
    }
    handleSubmit (ev){
        // stop refresh
        ev.preventDefault();

        this.props.stripe.createToken({name: this.state.donationFormName}).then(function(result) {
            // Handle result.error or result.token
            console.log(result);
            if (result.error) {
                this.setState({"error": result.error.message});
            }
          }.bind(this));
    }
    componentDidMount() {
        this.handleHashChange();
        window.addEventListener('hashchange', this.handleHashChange, false);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className={this.state.open ? 'donation donation--open' : 'donation donation--closed'}>
                <div className="donation__inner">
                    <div>
                        <label>Name</label>
                        <input type='text' id="donationFormName" name="donationFormName" value={this.state.donationFormName} onChange={this.handleInputChange} />
                        <label>Company</label>
                        <input type='text' id="donationFormCompany" name="donationFormCompany" value={this.state.donationFormCompany} onChange={this.handleInputChange} />
                        <label>Email</label>
                        <input type='text' id="donationFormEmail" name="donationFormEmail" value={this.state.donationFormEmail} onChange={this.handleInputChange} />
                        <label>Message</label>
                        <input type='text' id="donationFormMessage" name="donationFormMessage" value={this.state.donationFormMessage} onChange={this.handleInputChange} />
                    </div>

                    <CardElement />
                    <button className="donation__btn" type="submit" onClick={this.handleClickDonate}>Donate</button>
                    <button className="donation__btn donation__btn--close" type="button" onClick={this.handleClickClose}>Maybe later</button>
                    <div>{this.state.error}</div>
                    <div className="donation__graphic"><img className="" src="modules/assets/donationchart.png" alt=""/></div>
                
                </div>
            </form>
        )
    }
}

export default injectStripe(DonationForm);
