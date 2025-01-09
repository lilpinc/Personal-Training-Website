export default function PostureFormEightWeek() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Posture');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
            <div>
                <button onClick={returnTo} id="back" className='returnbtn'>Back</button>
                <header>
                    <h2 id="name">Posture & Form Correction 8 Week Progressive Program</h2>
                </header>
                <p className="overview">Want to start exercising but would like guidance on the basic lifting movements to reduce injury risk?</p>
                <p className="overview">Our Posture and Form Correction 8 week course provides in-depth guidance and instruction on proper movement patterns to reduce risk of injury and pain both inside and outside the gym!</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div className="program-card">
                <h5>Included In Package</h5>
                <ul className="program-info-list">
                    <li>Posture & Form Correction Videos</li>
                    <img src="/Pictures/foamrolling1.jpg" alt="posture" style={{ width: "90px", height: "80px", border: "2px gray solid" }} /> <span></span>
                    <img src="/Pictures/Deadlift.jpg" alt="form" style={{ width: "100px", height: "80px", border: "2px gray solid" }} /> <span></span>
                    <img src="/Pictures/chestpress.jpg" alt="form" style={{ width: "90px", height: "80px", border: "2px gray solid" }} /> <span></span>
                    <img src="/Pictures/hipthrust.png" alt="form" style={{ width: "90px", height: "80px", border: "2px gray solid" }} />
                    <li>Pre-programmed progressive posture & form correction training regimen for Beginners, Intermediate, and/or Advanced</li>
                    <li>Posture correction for pelvic tilt and shoulders w/ mobility exercises</li>
                    <li>Form correction for lower body lifts w/ in-depth analysis on muscle activation, sensation, and adaptation</li>
                    <li>Form correction for upper body lifts w/ in-depth analysis on muscle activation, sensation, and adaptation</li>
                    <li>In-depth guidance on progressions and regressions of lower and upper body lifts for chronic pain reduction & management</li>
                    <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                </ul>
            </div>
        </section>
    );
}