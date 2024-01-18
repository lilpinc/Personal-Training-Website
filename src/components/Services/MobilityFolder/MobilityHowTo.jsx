export default function MobilityHowTo() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Mobility');
    };

    return (
        <section className="library howtogetstarted books">
            <div className="description">
            <a onClick={returnTo}><button id="back" className="return returnbtn">Return</button></a>
                <h2>Full Body Mobility & Flexibility How To Videos</h2>
                <p id="description">Want to improve your joints and muscles at your own pace with guided videos to keep you on track? Sign up for our mobility and flexibility videos!</p>
                <p>For just $50 you will have access to our many videos that walk you through how to self massage, stretch muscles, and relieve aggravated joints throughout the body!</p>
            </div>
            <div>
            <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
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

