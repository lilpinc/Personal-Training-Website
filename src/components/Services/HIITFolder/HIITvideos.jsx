export default function HIITvideos() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/HIIT');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
         <div className="description">
                <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Independent HIIT Workouts</h2>
                </header>
                <p className="overview">Want to improve your cardio fitness, heart health, and strength but don't have a lot of time in the day? Get a high quality workout within a timely manner with our independent HIIT workouts!</p>
            <p className="overview">Our videos take you through a series of high intensity workouts ranging from 20 to 40 minutes in length.</p>
            <p className="overview">Unlimited Video Access:</p>
                <br />
                <p>$65.00</p>
            </div>
        <div>
        <button onClick={getStarted} className="getstarted2">Get Started</button>
        </div>
        <div className="videos">
            <article id="landmine" className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article id="video-box2" className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article id="video-box2" className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article id="video-box2" className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article id="video-box2" className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
            <article id="video-box2" className="video-box">Post HIIT Workout Here
                <p className="hide">available with purchase</p>
            </article>
        </div>
    </section>
    );
};