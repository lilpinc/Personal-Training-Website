export default function HIITprograms() {
    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/HIIT');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
            <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
                <h2>Full Body HIIT 8 Week Programs</h2>
                <p id="description">Want to improve your cardio fitness, heart health, and strength but don't have a lot of time in the day? Want to get a high intensity workout in without spending hours at the gym lifting and running?</p>
                <p><b>Try out our pre-programmed progressive HIIT Training Programs!</b></p>
                <p>Improve your fitness fast without having to spend hours a day at the gym by signing up to complete one of our 8 week HIIT courses!</p>
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