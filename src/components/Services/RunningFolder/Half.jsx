export default function Half() {
    const getStarted = () => {
        window.location.replace('/StartNow');
    };

    const returnTo = () => {
        window.location.replace('/Running');
    };
    
    return (
        <section className="library howtogetstarted books">
            <div className="description">
            <a onClick={returnTo}><button id="back" className="return returnbtn">Return</button></a>
                <h2>Half Marathon Training Program</h2>
                <p id="description">Training for a half marathon but don't know where to begin or how to progress your runs each week? Maybe you want a program that also includes some strengthening exercises to reduce injury?</p>
                <p><b>Our half marathon training programs are right for you!</b></p>
                <p>We offer programs for both beginners (no running experience) and intermediates (running experience & can run 3-5 miles or more without rest)!</p>
                <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <div className="program-card">
                <h5>Includes:</h5>
                <ul className="program-info-list">
                    <li>Running Program PDF</li>
                    <li>Form correction for upper and lower body mechanics w/ guidance for self-improvement</li>
                    <li>Lower body strengthening movements to reduce risk of injury</li>
                </ul>
                <button id="formbtn">Beginner PDF</button>
                <span>    </span>
                <button id="formbtn">Intermediate PDF</button>
            </div>
        </section>
    );
};