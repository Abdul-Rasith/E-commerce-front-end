import React, { useState, useContext } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "./CartContext";

// Load your publishable key from the Stripe Dashboard
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Call your server to create a payment intent
      const response = await fetch(
        "http://localhost:4242/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: getTotalAmount() * 100, // Convert to cents
            paymentMethodId: paymentMethod.id,
          }),
        }
      );

      const { clientSecret } = await response.json();

      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethod.id,
        }
      );

      if (confirmError) {
        setError(confirmError.message);
      } else {
        // Payment successful
        console.log("Payment successful!");
      }

      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div className="text-danger">{error}</div>}
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  return (
    <div className="container my-5">
      <h2>Secure Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;
