import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import {CardElement} from 'react-stripe-elements';

class DonationForm extends React.Component {
    constructor(){
        super();
        this.state = {
            "error": false,
            "open": false,
            "donationFormAmount": "10",
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
    handleSubmit (ev){
        // stop refresh
        ev.preventDefault();

        if (this.state.donationFormName === "") {
            this.setState({"error": "Please fill in your name."});
            return;
        }

        this.props.stripe.createToken({name: this.state.donationFormName}).then(function(result) {
            // Handle result.error or result.token
            console.log(result);
            if (result.error) {
                this.setState({"error": result.error.message});
            }

            if (result.token) {
                this.setState({"error": false});
            }
          }.bind(this));
    }
    componentDidMount() {
        this.handleHashChange();
        window.addEventListener('hashchange', this.handleHashChange, false);
    }

    render () {
        let fieldsetError = null
        if (this.state.error) {
            fieldsetError = (
                <fieldset className="donation__set donation__set--error">
                    {this.state.error}
                </fieldset>
            )
        }
        return (
            <form onSubmit={this.handleSubmit} className={this.state.open ? 'donation donation--open' : 'donation donation--closed'}>
                <img className="donation__logo" src="modules/assets/logo-white.png" />
                <div className="donation__inner">
                    
                    <fieldset className="donation__set">
                        <div className="donation__field donation__field--amount">
                            <span className="donation__amount-label">Amount</span>
                            <label className="donation__amount-preset">
                                <input defaultChecked className="donation__amount-radio" onChange={this.handleInputChange} id="donationFormAmount10" name="donationFormAmount" type="radio" value="10" />
                                <span className="donation__amount">€10</span>
                            </label>
                            <label className="donation__amount-preset">
                                <input className="donation__amount-radio" onChange={this.handleInputChange} id="donationFormAmount20" name="donationFormAmount" type="radio" value="20" />
                                <span className="donation__amount">€20</span>
                            </label>
                            <label className="donation__amount-preset">
                                <input className="donation__amount-radio" onChange={this.handleInputChange} id="donationFormAmount50" name="donationFormAmount" type="radio" value="50" />
                                <span className="donation__amount">€50</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="donation__set">
                        <CardElement />
                    </fieldset>

                    <fieldset className="donation__set">
                        <label className="donation__field">
                            <input placeholder="Name" type='text' id="donationFormName" name="donationFormName" value={this.state.donationFormName} onChange={this.handleInputChange} />
                        </label>
                    </fieldset>
                    
                    <fieldset className="donation__set">
                        <label className="donation__field">
                            <input placeholder="Company" type='text' id="donationFormCompany" name="donationFormCompany" value={this.state.donationFormCompany} onChange={this.handleInputChange} />
                        </label>
                    </fieldset>
                    
                    <fieldset className="donation__set">
                        <label className="donation__field">
                            <input placeholder="Email" type='text' id="donationFormEmail" name="donationFormEmail" value={this.state.donationFormEmail} onChange={this.handleInputChange} />
                        </label>
                    </fieldset>

                    <fieldset className="donation__set">
                        <label className="donation__field">
                            <input placeholder="Message" type='text' id="donationFormMessage" name="donationFormMessage" value={this.state.donationFormMessage} onChange={this.handleInputChange} />
                        </label>
                    </fieldset>

                    { fieldsetError }

                    <fieldset className="donation__set donation__set--last">
                        <button className="donation__btn" type="submit" onClick={this.handleClickDonate}>Donate</button>
                        <button className="donation__btn donation__btn--close" type="button" onClick={this.handleClickClose}>Maybe later</button>
                    </fieldset>
                </div>
            </form>
        )
    }
}

export default injectStripe(DonationForm);
