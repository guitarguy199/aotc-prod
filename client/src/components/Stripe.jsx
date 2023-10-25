import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import workbook from '../assets/workbook.jpeg'
import './Stripe.css';


const ProductCard = () => (
    <section className="product">
    <img src={workbook} alt="AI Workbook" />
        <div className="price">
            <h3>$199</h3>
            <h3>$99</h3>
        </div>
        {/* <div className="description">
            <h3>Description Here</h3>
        </div> */}
        <div className="checkout">
        <form action="/create-checkout-session" method="POST">
            <button className="checkout-button button-primary" type="submit">
                Buy Now!
            </button>
        </form>
        </div>
    </section>
);

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Stripe() {

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        //Check to see if this is a redirect from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            navigate('/success');
        } else {
            navigate('/ai-training-for-realtors');
        }

        if (query.get("canceled")) {
            navigate('/ai-training-for-realtors');
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        <ProductCard />
    )
}