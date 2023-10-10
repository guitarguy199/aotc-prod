import Stripe from '../../components/Stripe';
import './Ebook.css';
import aiTraining from './assets/ai-training.jpeg';

const Ebook = () => {
    return (
        <section className='ebook'>
            <img src={aiTraining} alt="AI" />
            <h2>Unlock the Future of Real Estate with AI Training</h2>
            <div className='prices'>
                <h3>$199</h3>
                <h3>$99</h3>
                </div>
                <div className='ebook-desc'>
                    <p>This workbook is designed to equip real estate agents with the knowledge and skills necessary to effectively utilize AI tools immediately.</p>
                    <p>We have given our hearts and souls into working on this and putting all of our knowledge in one space. You will be provided with breakdowns, videos, examples and best practices. This workbook covers 10 AI tools you can implement in your real estate business TODAY.</p>
                    <p>Here are the transformative chapters you will be guided through:</p>
                    <ol>
                        <li>Chat GPT 4.0 Prompts & Plugins - INSTANT Market Stats</li>
                        <li>Note Taking & Meeting Tools - Be in 3 places at once!</li>
                        <li>Video Cloning - Imagine personalized video messages off 1 video</li>
                        <li>Sound Remover / Enhancement - Wind? Cars? No problem!</li>
                        <li>Picture & Video Tools - Instant greenscreen, captions & more</li>
                        <li>Eye Contact - Teleprompter? Scripts? Notes? GAME CHANGER!</li>
                        <li>Text to Image - "Denver Skyline" = Instant content creation</li>
                        <li>Text Edited Videos - NEVER have to rerecord again! Instant edit</li>
                        <li>Clip Curation - Turn 60 second videos into 4 pieces of content</li>
                        <li>AI Avatar - Simply type your script, select your Avatar, viola Video!</li>
                    </ol>
                    <p>These tools will truly transform your business. They give you your time back. They save you hours of time and hundreds of dollars.</p>
                    <p>
                        Just imagine the possibilities and the impact it could have on your business. Your real estate business will be reborn. If you're ready to save hours of time, know exactly what to use, be more efficient, and achieve greater results, then this AI Training 101 Workbook is for you.
                    </p>
                    <p>
                    You will be guided through each tool while also joining a collaborative community of support throughout the AI journey. Shortly after purchasing, you will be given access to our private FB group and encouraged to participate in our 7 day challenge at the end of the Workbook!
                    </p>
                    <p id="yt-intro">
                        Check out this Youtube video for a FULL view and breakdown of what to expect!
                    </p>
                    <div id="yt-player">
                        <iframe width="596" height="396" src="https://www.youtube.com/embed/1azo4FMbeKI" title="Ahead of the Curve Intro Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            <div className='stripe-chk'>
                <h1>Grab Your Copy Today!</h1>
                <Stripe />
            </div>
        </section>
    )
}

export default Ebook;