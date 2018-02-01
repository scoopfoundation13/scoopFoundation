import React from 'react';
import axios from 'axios';
import {injectStripe} from 'react-stripe-elements';

import {CardElement} from 'react-stripe-elements';

let defaultState = {
    "error": false,
    "nameClassName": "",
    "open": false,
    "donationFormAmount": "1000",
    "donationFormName": "",
    "donationFormCompany": "",
    "donationFormEmail": "",
    "donationFormMessage": "",
    "thanks": false
};
class DonationForm extends React.Component {
    constructor(){
        super();
        this.state = defaultState;
        this.handleClickDonate = this.handleClickDonate.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleHashChange = this.handleHashChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitDonation = this.submitDonation.bind(this);
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
        if (this.state.nameClassName !== "" && ev.target.name === "donationFormName") {
            newState.nameClassName = "";
            newState.error = "";
        }
        this.setState(newState);
    }
    handleClickDonate (ev) {

    }
    handleClickClose (ev) {
        this.setState(defaultState);
        window.location.hash = '';
    }
    handleSubmit (ev){
        let dF = document.getElementById('donationForm');
        ev.preventDefault();
        if (this.state.donationFormName === "") {
            this.setState({
                "error": "Please fill in your name.",
                "nameClassName": "donation__field--invalid"
            });
            return;
        }

        dF.setAttribute("disabled","");

        // get token from Stripe
        this.props.stripe.createToken({name: this.state.donationFormName}).then(function(result) {

            // failure
            if (result.error) {
                this.setState({
                    "error": result.error.message,
                    "nameClassName": ""
                });
                dF.removeAttribute("disabled");
            }
            // success
            if (result.token) {
                this.setState({
                    "error": false,
                    "nameClassName": ""
                });

                this.submitDonation(result.token.id);
                dF.removeAttribute("disabled");
            }
          }.bind(this));
    }
    submitDonation(tokenId) {
        axios.post('/donation', {
            "stripeToken": tokenId,
            "amount": this.state.donationFormAmount,
            "name": this.state.donationFormName,
            "company": this.state.donationFormCompany,
            "email": this.state.donationFormEmail,
            "message": this.state.donationFormMessage
        }).then(function(response){
            if (response.error !== undefined) {
                return;
            }
            this.setState({"thanks": true});
        }.bind(this)).catch(function(error){
            console.log('axios HORRIBLE', error);
        })
    }

    componentDidMount() {
        this.handleHashChange();
        window.addEventListener('hashchange', this.handleHashChange, false);

    }

    render () {
        let fieldsetError = null
        let markup = null

        if (this.state.thanks) {
            markup = (
                <div className="donation__thanks">
                    <h1 className="donation__hdr">Thanks,</h1>
                    <p>Your donation will help to change a child's life.</p>
                    <button className="donation__btn donation__btn--close" type="button" onClick={this.handleClickClose}>Close</button>
                </div>
            )
        } else {
            if (this.state.error) {
                fieldsetError = (
                    <fieldset className="donation__set donation__set--error">
                        {this.state.error}
                    </fieldset>
                )
            }
            markup = (
                <div>
                    <fieldset className="donation__set">
                        <div className="donation__field donation__field--amount">
                            <span className="donation__amount-label">Amount</span>
                            <label className="donation__amount-preset">
                                <input defaultChecked className="donation__amount-radio" onChange={this.handleInputChange} id="donationFormAmount10" name="donationFormAmount" type="radio" value="1000" />
                                <span className="donation__amount">€10</span>
                            </label>
                            <label className="donation__amount-preset">
                                <input className="donation__amount-radio" onChange={this.handleInputChange} id="donationFormAmount20" name="donationFormAmount" type="radio" value="2000" />
                                <span className="donation__amount">€20</span>
                            </label>
                            <label className="donation__amount-preset">
                                <input className="donation__amount-radio" onChange={this.handleInputChange} id="donationFormAmount50" name="donationFormAmount" type="radio" value="5000" />
                                <span className="donation__amount">€50</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="donation__set">
                        <CardElement />
                    </fieldset>

                    <fieldset className="donation__set">
                        <label className={`donation__field ${this.state.nameClassName}`}>
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
                        <button className="donation__btn" type="submit">Donate</button>
                        <button className="donation__btn donation__btn--close" type="button" onClick={this.handleClickClose}>Maybe later</button>
                    </fieldset>
                </div>
            )
        }
        
        return (
            <form id="donationForm" method="post" action="/donation" onSubmit={this.handleSubmit} className={this.state.open ? 'donation donation--open' : 'donation donation--closed'}>

                <img className="donation__logo" src="modules/assets/scoop-logo-kl3.png" />
                <div className="donation__inner">
                    
                    { markup }
                    
                </div>
            </form>
        )
    }
}

export default injectStripe(DonationForm);
