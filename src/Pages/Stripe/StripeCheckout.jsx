import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51NuJ4jCAeBcNtSOYwD22OG1SOk9dG6taiMmNXpORU9PrMoXZRc4sHSW62lDRJc3hoCnRGvx2IOl4iWNYgXrqHMCl00jRk5aYBq");
    }
    return stripePromise;
};

const StripeCheckout = () => {
    const item = { 
        price: "price_1Nv1oECAeBcNtSOYvdKJvNRf",
        quantity: 1
    }

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }

    const redirectToCheckout = async () => {
        console.log('redirectToCheckout');

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout error", error)
    }

    return (
        <div className="checkout">
            <h1>Stripe Checkout</h1>
            <button onClick={redirectToCheckout}>Pay Now!</button>
        </div>
    )
}

export default StripeCheckout;