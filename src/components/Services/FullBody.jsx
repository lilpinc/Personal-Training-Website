import ViewServices from '../Services/viewServices';

export default function FullBody() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };


    return (
        <section className="library books howtogetstarted">
            <div className="description">
                <h2 id='mobilityflexibility1'>Full Body Fitness Training Programs</h2>
                <p id="description">Want to improve your overall fitness? Maybe work on muscle development and strength, while also improving your cardio fitness, balance, and agility/reaction time? </p>
                <p><b>Try out our pre-programmed Full Body Fitness Training Programs!</b></p>
                <p>For each program we provide three different time frame options:</p>
                <b><p>8 weeks - $75.00</p>
                    <p>16 weeks - $145.00</p>
                    <p>24 weeks - $210.00</p></b>
                <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <div className="mfoptions">
                <div id="hiitTypes" className="mfoptions0 hiitTypes">
                    <header className="hiitoption">
                        <p><b>Bodyweight Training Program
                            <br />
                            starting at $75.00</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Overall Fitness Over 8-24 weeks, Including Strength, Endurance, Balance, Stability, and Mobility Using Just Your Bodyweight</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels, Best Choice for Elderly & Beginners</li>
                            <li className="mfoptions12">Supports Better Cardiovascular Health, Joint Health, Daily Energy Levels, and Quality Sleep</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                            <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs</li>
                        </ul>
                        <ul>
                        <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
                <div id="hiitTypes" className="mfoptions0 hiitTypes">
                    <header className="hiitoption">
                        <p><b>Dumbbell and Bands Only Training Program <br />
                            starting at $75.00</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Overall Fitness Over 8-24 weeks, Including Strength, Endurance, Balance, Stability, and Mobility Using Dumbbells & Bands</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels, Best Choice for Home Gym Ages 12-75yrs</li>
                            <li className="mfoptions12">Supports Better Cardiovascular Health, Joint Health, Daily Energy Levels, and Quality Sleep</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                            <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs</li>
                        </ul>
                        <ul>
                        <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
                <div id="hiitTypes" className="mfoptions0 hiitTypes">
                    <header className="hiitoption">
                        <p><b>Full Gym Access Training Program <br />
                            starting at $75.00</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Overall Fitness Over 8-24 weeks, Including Strength, Endurance, Balance, Stability, and Mobility Using Full Access Gym Equipment</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels, Best Choice for Athletes</li>
                            <li className="mfoptions12">Supports Better Cardiovascular Health, Joint Health, Daily Energy Levels, and Quality Sleep</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                            <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs</li>
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