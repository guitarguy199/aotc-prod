import Card from '../../components/Card';
import workbookImg from './assets/workbook.jpeg';
import consultingImg from './assets/consulting.jpeg';
import newsletterImg from './assets/newsletter.jpeg';
import './Services.css';
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <section className='services'>
        <div  className="card-1">
        <Card>
                <div className='home-card'>
                    <img src={workbookImg} alt="AI Tools Course Workbook"></img>
                    <div className='card-text'>
                        <h3>10 AI Tools & How-To's for Realtors</h3>
                        <h4>Learn how to quickly do: market stats, eye contact, video cloning, text edit videos, b-roll & more!</h4>
                        <Link to="/ai-training-for-realtors">
                            <button className='hc-btn button-primary'><span className='button-text'>Learn More</span></button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
            <div className='card-2'>
            <Card>
                <div className='home-card '>
                    <div className='card-text'>
                        <h3>Marketing or Business Consultation</h3>
                        <h4>Schedule a 15-minute meeting to assess your business and goals.</h4>
                        <Link to="/book-a-consultation">
                            <button className='hc-btn button-primary'><span className='button-text'>Learn More</span></button>
                        </Link>
                    </div>
                    <img src={consultingImg} alt="consulting meeting"></img>
                </div>
            </Card>
            </div>
            <div className='card-3'>
            <Card>
                <div className='home-card'>
                    <img src={newsletterImg} alt="phone with email app open"></img>
                    <div className='card-text'>
                        <h3>Stay Ahead!</h3>
                        <h4>Join our email list to stay informed on upcoming classes and workshops.</h4>
                        <Link to="/subscribe"><button className='hc-btn button-primary'><span className='button-text'>Learn More</span></button></Link>
                    </div>
                </div>
            </Card>
            </div>
        </section>

    )
}

export default Services;