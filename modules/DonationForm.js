import React from 'react';
import axios from 'axios';
import {injectStripe} from 'react-stripe-elements';

import {CardElement} from 'react-stripe-elements';

class DonationForm extends React.Component {
    constructor(){
        super();
        this.state = {
            "error": false,
            "nameClassName": "",
            "open": false,
            "donationFormAmount": "1000",
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
        if (this.state.nameClassName !== "" && ev.target.name === "donationFormName") {
            newState.nameClassName = "";
            newState.error = "";
        }
        this.setState(newState);
    }
    handleClickDonate (ev) {

    }
    handleClickClose (ev) {
        window.location.hash = '';
    }
    handleSubmit (ev){
        ev.preventDefault();

        if (this.state.donationFormName === "") {
            this.setState({
                "error": "Please fill in your name.",
                "nameClassName": "donation__field--invalid"
            });
            return;
        }

        document.getElementById('donationForm').setAttribute("disabled","");

        // get token from Stripe
        this.props.stripe.createToken({name: this.state.donationFormName}).then(function(result) {
            // failure
            if (result.error) {
                document.getElementById('donationForm').removeAttribute("disabled");
                this.setState({
                    "error": result.error.message,
                    "nameClassName": ""
                });
            }
            // success
            if (result.token) {
                this.setState({
                    "error": false,
                    "nameClassName": ""
                });

                axios.post('/donation', {
                    "stripeToken": result.token.id,
                    "amount": this.state.donationFormAmount,
                    "name": this.state.donationFormName,
                    "company": this.state.donationFormCompany,
                    "email": this.state.donationFormEmail,
                    "message": this.state.donationFormMessage
                }).then(function(response){
                    console.log('axios', response);
                    document.getElementById('donationForm').removeAttribute("disabled");
                }).catch(function(error){
                    console.log('axios HORRIBLE', error);
                    document.getElementById('donationForm').removeAttribute("disabled");
                })

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
            <form id="donationForm" method="post" action="/donation" onSubmit={this.handleSubmit} className={this.state.open ? 'donation donation--open' : 'donation donation--closed'}>

                <img className="donation__logo" src="modules/assets/logo-white.png" />
                <div className="donation__inner">
                    
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
            </form>
        )
    }
}

export default injectStripe(DonationForm);
