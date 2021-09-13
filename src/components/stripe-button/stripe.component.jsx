import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JZ64EBdZMjT5nieEgdN8LzFrdPIzwW5HECfpXBjKJqcSnNIfaSBWrFlGAij7L61HKBY14EI8x35bHqx8LTRxSbL00H5pK10Uz';

    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://img.icons8.com/cute-clipart/64/000000/react-native.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;