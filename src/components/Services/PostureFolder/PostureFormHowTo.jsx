export default function PostureFormHowTo() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Posture');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
             <div className="description">
                <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Posture & Form 'How to' Videos</h2>
                </header>
                <p className="overview">Want to improve your posture, decrease chronic pain, and learn propr lifting/movement patterns at your own pace with guided videos to keep you on track? Sign up for our posture and form correction videos!</p>
                <p className="overview">Learn how to self massage and stretch muscles that may be affecting body alignment through corrective exercise and practice lifting and movement form.</p>
                <p className="overview">Unlimited Video Access:</p>
                <br />
                <p>$50.00</p>
            </div>
            <div>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div className="videos">
                <article id="squat" className="video-box">Squat Variation Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="deadlift" className="video-box">Deadlift Variation Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="chestpress" className="video-box">Push Up & Chest Press Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="lunge" className="video-box">Split Squat & Lunge Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="hipthrust" className="video-box">Glute Bridge & Hip Thrust Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="pullup" className="video-box">Upper Body Pull (Row, Pull-Up) Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="core" className="video-box">Core Engagement Form
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Ankle Mobility Self Massage
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Ankle Mobility Corrective Exercises
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Anterior Pelvic Tilt Self Massage & Lower Back Pain
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Anterior Pelvic Tilt Corrective Exercises & Lower Back Pain
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Posterior Pelvic Tilt Self Massage & Lower Back Pain
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Posterior Pelvic Tilt Corrective Exercises & Lower Back Pain
                    <p className="hide">available with purchase</p>
                </article>
                <article className="video-box">Shoulder & Upper Back Self Massage for Kyphosis
                    <p className="hide">available with purchase</p>
                </article>
                <article id="shoulder" className="video-box">Shoulder & Upper Back Correctives Exercises & Kyphosis
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Valgus Knee Self Massage
                    <p className="hide">available with purchase</p>
                </article>
                <article id="video-box2" className="video-box">Valgus Knee Corrective Exercises
                    <p className="hide">available with purchase</p>
                </article>
            </div>
        </section >
    );
}