export default function HIITvideos() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/HIIT');
    };

    return (
        <section className="library howtogetstarted books">
        <div className="description">
        <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
            <h2>Independent HIIT Workouts</h2>
            <p id="description">Want to improve your cardio fitness, heart health, and strength but don't have a lot of time in the day? Get a high quality workout within a timely manner with our independent HIIT workouts!</p>
            <p>For just $65 you will have access to our many videos that take you through a series of high intensity workouts ranging from 20 to 40 minutes in length!</p>
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