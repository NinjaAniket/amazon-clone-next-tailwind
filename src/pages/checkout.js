import Header from "../components/header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/checkout-product";
import { useSession } from "next-auth/client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const [session] = useSession();

  const createCheckoutSession = async () => {
    try {
      const stripe = await stripePromise;
      const checkoutSession = await axios.post("/api/create-checkout-session", {
        items,
        email: session.user.email,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) alert(result.error.message);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items?.length ? "Your shopping basket" : "Your Cart is empty"}
            </h1>
            {items?.map((item, idx) => (
              <CheckoutProduct {...{ item }} key={idx} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white shadow-md m-5 p-4">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
              </h2>
              <span className="font-bold">&#x20B9;: {Math.floor(total)}</span>
              <button
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-white"
                }`}
              >
                {!session ? "Sign In to Checkout" : " Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
