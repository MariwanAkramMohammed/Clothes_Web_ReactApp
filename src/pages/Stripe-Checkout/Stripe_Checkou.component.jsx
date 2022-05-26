import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const StripePrice = price * 100;//stripe wants sent $
  const puclishkey1 =
    "pk_test_51L352RCgcGsKlK2LY5RuXGUmNRbLnlaKVCONabFCdzRgUFja8H5BGNAFtKvE6vpmiRjBaP3XenCUgLau40Ka3G8m00HK19MnSU";

  const onToken = () => {
// when your pay ment done token send all data about payment(user) to backend 
    alert("your paymetn is successed");
  };
  return (
    <StripeCheckout
      label="pay now"
      name="CROWN CLOTHES"
      image="http://svgshare.com/i/CUz.svg"
      billingAddress
      shippingAddress
      description={`your total payment is $${price}`}
      amount={StripePrice}
      panelLabel="pay now"
      token={onToken} // when payment went successed it will send necessary data to back end to charg
      stripeKey={puclishkey1}
    />
  );
};
export default StripeCheckoutButton;
