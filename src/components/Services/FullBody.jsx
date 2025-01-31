import ViewServices from '../Services/viewServices';
import { Link, useLocation } from 'react-router-dom';

export default function FullBody() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };

    const returnServices = () => {
        window.location.replace('/Services');
    };

    return (
        <section className="mobilityflexibility howtogetstarted">
            <div className="description">
                <button onClick={returnServices} id="back" className='returnbtn'>Back</button>
                <header>
                    <h1 id="name">Full Body Fitness Training Programs</h1>
                </header>
                <p className="overview">Want to improve your overall fitness? Maybe work on muscle development and strength, while also improving your cardio fitness, balance, and agility/reaction time? </p>
                <p className="overview">Try out our pre-programmed Full Body Fitness Training Programs! Each program supports cardiovascular and joint health, increased daily energy levels, quality sleep, and decreased stiffness. Beginner to advanced options are available. </p>
                <p className="overview">Program Length Options:</p>
                <br />
                <p>8 weeks - $75.00</p>
                <p>16 weeks - $145.00</p>
                <p>24 weeks - $210.00</p>
                <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <div className="mfoptions full">
                <div className="mfoptions0 fullbody">
                    <header className="hiitoption">
                        <p><b>Bodyweight Training Program
                            <br />
                            starting at $75.00</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Overall Fitness Over 8-24 weeks, Including Strength, Endurance, Balance, Stability, and Mobility Using Just Your Bodyweight</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels, Best Choice for Elderly & Beginners</li>
                        </ul>
                        <ul>
                            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0 fullbody">
                    <header className="hiitoption">
                        <p><b>Dumbbell and Bands Only Training Program <br />
                            starting at $75.00</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Overall Fitness Over 8-24 weeks, Including Strength, Endurance, Balance, Stability, and Mobility Using Dumbbells & Bands</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels, Best Choice for Home Gym Ages 12-75yrs</li>
                        </ul>
                        <ul>
                            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0 fullbody">
                    <header className="hiitoption">
                        <p><b>Full Gym Access Training Program <br />
                            starting at $75.00</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Overall Fitness Over 8-24 weeks, Including Strength, Endurance, Balance, Stability, and Mobility Using Full Access Gym Equipment</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels, Best Choice for Athletes</li>
                        </ul>
                        <ul>
                            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
            </div>
                <ViewServices />
        </section>

    );
}