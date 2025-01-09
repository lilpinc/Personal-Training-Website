export default function HIITprograms() {
    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/HIIT');
    };

    return (
        <section className="mobilityflexibility howtogetstarted">
            <div>
            <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Full Body HIIT 8 Week Programs</h2>
                </header>
                <p  className="overview">Want to improve your cardio, heart health, and strength without spending hours at the gym lifting and running?</p>
                <p  className="overview">Try out our pre-programmed progressive 8 week HIIT Training Programs!</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div className="mfoptions">
                <div className="mfoptions0 hiitTypes">
                    <header className="hiitoption">
                        <p><b>Strength & Power Focused HIIT</b></p>
                            <ul className="mfopt">
                                <li className="mfoptions12">Progressively improve Strength and Power over an 8 week period</li>
                                <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs</li>
                                <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                                <li className="mfoptions12">Supports Better Cardiovascular Health, Strength, Muscle Development and Reaction Time</li>
                               <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                            </ul>
                    </header>
                </div>
                <div className="mfoptions0 hiitTypes">
                    <header className="hiitoption">
                    <p><b>Endurance Focused HIIT</b></p>
                    <ul className="mfopt">
                                <li className="mfoptions12">Progressively improve Endurance over an 8 week period</li>
                                <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs </li>
                                <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                                <li className="mfoptions12">Supports Better Cardiovascular Health, RHR, HRV, VO2max</li>
                                <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                            </ul>
                    </header>
                </div>
                <div className="mfoptions0 hiitTypes">
                    <header className="hiitoption">
                        <p><b>Base Fitness/Conditioning Focused HIIT</b></p>
                        <ul className="mfopt">
                                <li className="mfoptions12">Progressively improve Base Fitness Level and Conditioning over an 8 week period</li>
                                <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs </li>
                                <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                                <li className="mfoptions12">Supports Better Cardiovascular Health, RHR, HRV, VO2max, Muscle Development, and Reaction Time</li>
                                <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                            </ul>
                    </header>
                </div>
            </div>
        </section>
    );
};