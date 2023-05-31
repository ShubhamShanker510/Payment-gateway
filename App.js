import logo from './logo.svg';
import './App.css';
import GooglePlayButton from '@google-pay/button-react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1><img src={logo} className="App-logo" alt="" />  G-Pay</h1>
      <hr />
      <GooglePlayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks:['MASTERCARD','VISA']
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId:'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName:'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'INR',
            countryCode:'IN'
          },
         /* shippingAddressParameters: true,
          callbackIntents: ['PAYMENT_AUTHORIZATION'],*/
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Sucess', paymentRequest);
        }}

       /* onPaymentAuthorized={paymentData => {
          console.log('Payment Authorised Sucess', paymentData)
          return {
            transactionState: 'SUCCESS'}
        }}*/

        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'

      />

    </div>
  );
}

export default App;
