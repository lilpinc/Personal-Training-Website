
import React from 'react';
import ViewServices from '../Services/viewServices';


export default function Online() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };

    return (
        <>
        <section className="library books howtogetstarted">
            <div className="description">
                <h2>Online Tailored Personal Training</h2>
                <p id="description">Want a program created specifically just for you and your needs by our strength and conditioning specialist? </p>
                <p><b>Try out our online tailored personal training!</b></p>
                <p>With online training you receive unique bi-monthly workout programs based on your physical abilities and performance level along with nutritional guidelines that support your goals.</p>
                <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <div className="program-card">
                <h5>Includes:</h5>
                <ul className="program-info-list">
                    <li>1-hour free consultation and physical assessment zoom meeting with our trainer</li>
                    <li>Nutritional guidelines based on present dietary habits and fitness goals</li>
                    <li>Personalized 8-week workout programs to fit your schedule and time preferences</li>
                    <li>Weekly check-ins from our trainer to receive feedback and adjust exercises if needed to better fit client schedule, contraindications, and/or goals</li>
                    <li>All workout regimens include movement preparation patterns, resistance and aerobic training, energy systems development, corrective exercises, mobility & stability exercises, and stretching to best improve overall health and reduce risk of injury</li>
                    <li className="mfoptions12"> <button id='formbtn'><a id="pdfbtn" href="PDF/clientSample.pdf" target="_blank">Personalized Training Example</a></button></li>
                </ul>
                </div>
        </section>
        <section id="return" className="howtogetstarted">
            <ViewServices />
        </section>
        </>
    );
}