import './Booking.css';
import bookingImg from './assets/booking.jpeg';
import BookingForm from './BookingForm';

const Booking = () => {
    return (
        <section className='booking'>
            <img src={bookingImg}  alt="booking calendar" />
            <h2>Book a 1 : 1 Call with Taylor</h2>
            <div className='booking-text'>
                <p>I'm here to help you unleash your full potential!</p>
                <p>During our time together, I'll provide you with specific advice tailored to your unique situation.  I'll be your trusted partner, walking you through each step of the way. We will review what services would be the most beneficial to your business.</p>
                <p>Together, we'll explore if we're the perfect match to achieve your goals. It's all about finding that ideal partnership that propels you towards greatness. So let's dive in, dig deep, and create a roadmap customized just for you.</p>
            </div>
            <BookingForm />
        </section>
    )
}

export default Booking;