export default function FiveK() {
    const getStarted = () => {
        window.location.replace('/StartNow');
    };

    const returnTo = () => {
        window.location.replace('/Services/Running');
    };
    
    return (
        <section className="library howtogetstarted books">
            <div className="description">
            <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
                <h2>5K Training Programs</h2>
                <p id="description">Training for a 5k but don't know where to begin or how to progress your runs each week? Maybe you want a program that also includes some strengthening exercises to reduce injury?</p>
                <p><b>Our 5K training programs are right for you!</b></p>
                <p>We offer programs for both beginners (no running experience) and intermediates (running experience & can run 1 mile or more without rest)!</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
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