import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loader from "../../../Router/Loader/Loader";
import Pay from "./Pay";

const stripePromise = loadStripe(process.env.REACT_APP_key);
console.log(stripePromise);

const Payment = () => {
  const result = useLoaderData();
  console.log(result);

  // const navigation = useNavigation();

  // if (navigation.state === "loading") {
  //   return <Loader></Loader>;
  // }
  return (
    <div>
      <section className=" dark:text-gray-700 ">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Payment For
            <span className="dark:text-violet-400 mx-3">
              "{result.subject}"
            </span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Please Pay <strong>{result?.price} Taka</strong> for your
            appointment <br />
            on {result.date} at {result?.slot}
          </p>
          <div className="w-3/4">
            <Elements stripe={stripePromise}>
              <Pay result={result}></Pay>
            </Elements>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
