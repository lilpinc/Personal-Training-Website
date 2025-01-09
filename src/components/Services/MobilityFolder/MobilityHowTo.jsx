export default function MobilityHowTo() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Mobility');
    };

    return (
        <section className="howtogetstarted mobilityflexibility books">
            <div className="description">
                <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Full Body Mobility & Flexibility How To Videos</h2>
                </header>
                <p className="overview">Want to improve your joints and muscles at your own pace with guided videos to keep you on track? Sign up for our mobility and flexibility videos!</p>
                <p className="overview2">For $50 you will have access to our many videos that walk you through how to self massage, stretch muscles, and relieve aggravated joints throughout your body!</p>
            </div>
            <div>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div className="videos">
                <article className="video-box">Neck/Upper Trap Stretches
                    <p className="hide">available with purchase</p>
                </article>
                <article className="video-box">Chest Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article className="video-box">Upper Back and Lat Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article className="video-box">Bicep and Tricep Stretches
                    <p className="hide">available with purchase</p>
                </article>
                <article className="video-box">Mid and Lower Back Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Glute Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Hip Flexor Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Hamstring Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Quad Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Calf and Soleus Stretches w/ Mobility Work
                    <p className="hide">available with purchase</p>
                </article>
            </div>
        </section>
    );
}

