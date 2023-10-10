import { useState } from "react";



const Success = () => {

const [email, setEmail] = useState("");

const handleEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value)

    //Call mailchimp transactional


}

const handleSubmit = (e) => {
    console.log(email)
}

    return (
        <div>
            <h1>Order Confirmed!</h1>
            <h2>One more step!</h2>
            <h2>Please Confirm the Email Address We Should Send the Ebook to</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={email}
                onChange={handleEmail} /> 
                {/* Figure out why this ^ is screwy */}
                <button type="submit">Get Your eBook!</button>
            </form>
            {/* setup confirmation screen once customer has entered email */}
        </div>
    )
}

export default Success;