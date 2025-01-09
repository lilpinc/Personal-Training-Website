export default function MobilityEightWeek() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Mobility');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
            <div>
                <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Mobility & Flexibility 8 Week Progressive Program</h2>
                </header>
                <p className="overview">Feel stiff or tight going through every day activities? Have a loss of range of motion and/or nagging surface level pain in your joints?</p>
                <p className="overview2">Mobility and flexibility training can help!</p>
                <p className="overview2">Improve your daily movement, joint health, and muscles by signing up to complete our 8 week functional mobility and flexibility course!</p>
                <button className="getstarted2" onClick={getStarted}>Get Started</button>
            </div>
            <div className="program-card">
                <h5>Included in Package</h5>
                <ul className="program-info-list">
                    <li>Mobility & Flexibility Videos:</li>
                    <img src="/Pictures/foamrolling2.jpg" alt="foamrolling" style={{ width: "90px", height: "80px", border: "2px gray solid" }} /> <span></span>
                    <img src="/Pictures/foamrolling1.jpg" alt="foamrolling" style={{ width: "90px", height: "80px", border: "2px gray solid" }} />
                    <li>Pre-programmed progressive Mobility & Flexibility training regimen for Beginners, Intermediate, and/or Advanced</li>
                    <li>Neck & upper trap stretches</li>
                    <li>Chest, bicep, tricep, and upper back/shoulder stretches with alternatives & mobility work</li>
                    <li>Mid and lower back stretches with alternatives & mobility work</li>
                    <li>Glute and hip flexor stretches with alternatives & mobility work</li>
                    <li>Hamstring, quad, and lower leg stretches with alternatives & mobility work</li>
                    <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                </ul>
            </div>
        </section>
    );
}