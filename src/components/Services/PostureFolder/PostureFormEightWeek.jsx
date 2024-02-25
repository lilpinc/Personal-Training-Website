export default function PostureFormEightWeek() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Posture');
    };

    return (
        <section className="library howtogetstarted books">
            <div className="description">
            <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
                <h2>Posture & Form Correction 8 Week Progressive Program</h2>
                <p id="description">Want to start exercising but nervous about injury due to present discomfort and/or pain, or a previous injury? Or maybe you just want some guidance on the basic body movements you see others do in the gym?</p>
                <p><b>Posture and Form Correction training is right for you!</b></p>
                <p>Our Posture and Form Correction 8 week course provides in-depth guidance and instruction on proper movement patterns to reduce risk of injury and pain both inside and outside the gym!</p>
                <button onClick={getStarted}className="getstarted2">Get Started</button>
            </div>
            <div className="program-card">
                <h5>Includes:</h5>
                <ul className="program-info-list">
                    <li>Posture & Form Correction Videos:</li>
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