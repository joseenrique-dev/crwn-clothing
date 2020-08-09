import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 //because stripe wants currencies.
  const publishableKey =
    'pk_test_51HCslzDA9nwtTGxOu1k0msg9JIFIkQfi6idCVUH59gYlQqOlGxgbKtlUr8aizhn2H8wVWNNUmHsVqd1ZYjaCqGyK003ETBe6MT'

  const onTocken = (token) => {
    console.log('Resolve Token', token)
    alert('Payment Successfuly')
  }
  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onTocken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
