import React from 'react';
import {CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';

/*
<label>
    CardNumberElement
    <CardNumberElement/>
</label>
<label>
    CardExpiryElement
    <CardExpiryElement/>
</label>
<label>
    CardCVCElement
    <CardCVCElement/>
</label>
<label>
    PostalCodeElement
    <PostalCodeElement/>
</label>
*/
class AddressSection extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>Name</label>
                    <label>Company</label>
                    <label>Email</label>
                    <label>Message</label>
                </div>
                <CardElement />
            </div>
        )
    }
}

export default AddressSection;
