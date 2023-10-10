import './BookingForm.css';
import { /* StaticDateTimePicker, */ DateTimePicker } from '@mui/x-date-pickers';
import format from 'date-fns/format';
import { useState } from 'react';
import isWeekend from 'date-fns/isWeekend';
import { TextField, Typography } from '@mui/material';
import InputField from '../../components/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/aotc-lg.jpeg';

const BookingForm = () => {

    const [dateTime, setDateTime] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [service, setService] = useState('')
    const [success, setSuccess] = useState(false)

    const services = ["Marketing", "Business Consultation", "Other"];

    const mailchimp = require("@mailchimp/mailchimp_transactional")(process.env.REACT_APP_MC_TRANSACTIONAL_TEST);

    // const message = {
    //     from_email: "info@aheadofthecurvemedia.com",
    //     subject: "Consultation Appointment Confirmation",
    //     to: [
    //         {
    //         email: email,
    //         type: "to"
    //         }
    //     ],
    //     images: [ 
    //         {
    //         type: 'image/jpeg',
    //         name: logo,
    //         content: "data:image/jpeg;base64,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"
    //         }
    //     ],
        
    // };

    const string = (fname) => {
        fname = JSON.stringify(fname);
    }

    const message = { 
            from_email: "info@aheadofthecurvemedia.com",
            subject: "New Booking from AOTC",
            text: `Hi Taylor, ${name} has requested an appointment for ${dateTime} to speak about ${service}. Here are their included comments: ${comment}. You can reach them for follow-up at ${email}.`,
            to: [
                {
                email: "info@aheadofthecurvemedia.com",
                type: "to"
                }
            ],
        }

    async function run() {
        const response = await mailchimp.messages.send({
            message
        });
        console.log(response);
        console.log(message);
    }

    const isFormValid = () => {
        return dateTime && name && email && service !== '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        console.log({dateTime, name, email, comment, service})
        run();

    }
    // const testEmail = () => {
        
    // }

    return (
            <section className='booking-form'>
            {/* <button className='button-primary' onClick={testEmail}>Test Email!!!</button> */}
            <h1>Let's Chat!</h1>
            {!success ? (
                <form onSubmit={handleSubmit} className='tay-booking-form'>
            <p>Choose a Date and Time*</p>
            <DateTimePicker
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
            shouldDisableDate={isWeekend}
            disablePast
            className='picker inputfield'
            minutesStep={15}
            slotProps={{ textField: { placeholder: 'Choose a Date/Time' } }}
            />
            <InputField
                label="Your Name*"
                onChangeHandler={setName}
                type="text"
                value={name}
                placeholder="Enter your name"
                isRequired
            />
            <InputField
                label="Email Address*"
                onChangeHandler={setEmail}
                type="text"
                value={email}
                placeholder="Enter your email"
                isRequired
            />
            <p className='select'>Select A Service*</p>
            <select
            className='service-select inputfield-field'
            value={service}
            onChange={e => setService(e.target.value)}
            placeholder='Marketing or Business Consultation?'
            >
                {services.map(service => 
                <option key={service}>
                    {service}
                </option>
                )}
            </select>
            <InputField
                label="How Can I Help?"
                onChangeHandler={setComment}
                type="textarea"
                value={comment}
                placeholder="Message (optional)"
            />
            <button
            type="submit"
            className='button-primary submit'
            disabled={!isFormValid()}
            >
            Submit
            </button>
            </form>
            ) : (
                <div className='success'>
                <FontAwesomeIcon icon={faCircleCheck} size="5x" />
                    <h2>Appointment Set!</h2>
                    <p>Thanks {name}! I look forward to speaking with you.</p>
                    {/* <p>An email confirmation will be sent to {email}.</p> */}
                    <p>Need to reschedule? No problem! Shoot me a message at info@aheadofthecurvemedia.com</p>
                    <Link to="/">
                        <button className='button-primary go-home'><span className='button-text'>Return Home</span></button>
                    </Link>
                </div>
            )}
        </section>
    )
}

export default BookingForm;