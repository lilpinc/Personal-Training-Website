export default function Marathon() {
    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Running');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
        <div>
            <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
            <header>
                <h2 id="name">Marathon Training Program</h2>
            </header>
            <p className="overview">Training for a marathon but don't know where to begin or how to progress your runs each week? Maybe you want a program that also includes some strengthening exercises to reduce injury?</p>
            <p className="overview">Our marathon training programs are right for you!</p>
            <p className="overview">We offer programs for beginners with no previous running experience and intermediates!</p>
            <button className="getstarted2" onClick={getStarted}>Get Started</button>
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