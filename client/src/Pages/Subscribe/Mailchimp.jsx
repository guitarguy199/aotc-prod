import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Mailchimp.css';
import '../../components/Card.css';
import Subscribe from "./Subscribe";

const Mailchimp = () => {

    const postUrl = process.env.REACT_APP_MC_POST_URL;

    return (
        <section className='mc'>
        {/* <div className="mc-container"> */}
        <MailchimpSubscribe
                    url={postUrl}
                    render={({ subscribe, status, message }) => (
                       <Subscribe
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        />
                    )}
                    />
        {/* </div> */}
             </section>
    )
}

export default Mailchimp;