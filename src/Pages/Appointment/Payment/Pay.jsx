import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const Pay = ({ result }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { price, name, email, _id } = result;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        auth: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire(`${error.message}`, "Please Try Again ", "question");
    }

    setLoading(true);

    const { paymentIntent, error: secoundError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (secoundError) {
      return Swal.fire(
        `${secoundError.message}`,
        "Please Try Againv ",
        "question"
      );
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        name: name,
        email: email,
        transaction: paymentIntent.id,
        bookingId: _id,
      };

      fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          auth: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire(`Your Payment is Successfull`, "Thank you sir ", "success");
          setData(paymentIntent.id);
        });
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-20 btn py-3 my-10 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          type="submit"
          disabled={!stripe || !clientSecret || loading || data}
        >
          Pay
        </button>
      </form>
      {data && <h1 className="text-green-500 ">transaction ID : {data}</h1>}
    </div>
  );
};

export default Pay;
