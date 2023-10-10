/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import './Subscribe.css';

const Subscribe = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email, //this might be MERGE0
            MERGE1: firstName,
            MERGE2: lastName
        })
    }

    return (
        <section className='subscribe'>
             <form 
             className='subscribe-form'
             onSubmit={(e) => handleSubmit(e)}
             >
             <div className='mc-form'>
                <h2>Stay Ahead!</h2>
                <h3>Join our email list to stay informed on upcoming classes & workshops.</h3>

                    {status === 'sending' && (
                        <div className='mc-alert mc-sending'>
                            sending...
                        </div>
                    )}
                    {status === 'error' && (
                        <div
                        className='mc-alert mc-error'
                        dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}

                    {status === "success" && (
                        <div className=
                        "mc-alert mc-success"
                        dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    
                    {status !== "success" ? (
                        <div className='subscribe-inputs'>
                    <InputField 
                        label="First Name"
                        onChangeHandler={setFirstName}
                        type="text"
                        value={firstName}
                        placeholder="First name"
                        isRequired
                    />
                    <InputField 
                        label="Last Name"
                        onChangeHandler={setLastName}
                        type="text"
                        value={lastName}
                        placeholder="Last name"
                        isRequired
                    />
                    <InputField 
                        label="Email"
                        onChangeHandler={setEmail}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                    />
                </div>
                    ) : null}

                {
                    status === 'success' ? <button
                        onClick={console.log("success")}
                        className='mc-modal button-primary'>Close</button> :
                        <InputField
                        className="button-primary mc-btn"
                        label="Subscribe"
                        type="submit"
                        formValues={[email, firstName, lastName]}
                />
                }
                </div>
             </form>
        </section>
    )
}

export default Subscribe;