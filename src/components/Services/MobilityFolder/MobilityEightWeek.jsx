export default function MobilityEightWeek() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Mobility');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
            <a onClick={returnTo}><button id="back" className="return returnbtn">Return</button></a>
                <h2>Full Body Mobility & Flexibility 8 Week Progressive Program</h2>
                <p id="description">Do you feel STIFF and TIGHT going through every day activities? Have a loss of range of motion? Maybe even have some NAGGING surface level pain in your joints?</p>
                <p><b>Mobility and flexibility training can help!</b></p>
                <p>Improve your daily movement and the health of your joints and muscles by signing up to complete this 8 week functional progressive mobility and flexibility course!</p>
                <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <div className="program-card">
                <h5>Includes:</h5>
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