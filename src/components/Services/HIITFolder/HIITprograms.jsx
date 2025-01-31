export default function HIITprograms() {
    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/HIIT');
    };

    return (
     
        <section className="mobilityflexibility howtogetstarted">
            <div className="description">
                <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Full Body HIIT 8 Week Programs</h2>
                </header>
                <p className="overview">Want to improve your cardio, heart health, and strength without spending hours at the gym lifting and running?</p>
                <p className="overview">Try out our pre-programmed progressive 8 week HIIT Training Programs! Beneficial for all ages and fitness levels, includes beginner, intermediate, and advanced programs.</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div className="mfoptions full">
                <div className="mfoptions0 fullbody">
                    <header className="hiitoption">
                        <p><b>Strength & Power Focused HIIT</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Progressively improve Strength and Power over an 8 week period</li>
                            <li className="mfoptions12">Supports Cardiovascular Health, Strength, Explosivity, Muscle Development, and Reaction Time</li>
                        </ul>
                        <ul>
                            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0 fullbody">
                    <header>
                        <p className="hiitoption"><b>Endurance Focused HIIT</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Progressively improve Endurance over an 8 week period</li>
                            <li className="mfoptions12">Supports Cardiovascular Health, Resting Heart Rate, Heart Rate Variability, Muscular Endurance, and VO2max</li>
                        </ul>
                        <ul>
                            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0 fullbody">
                    <header>
                        <p className="hiitoption"><b>Base Fitness/Conditioning Focused HIIT</b></p>
                        <ul className="mfopt">
                            <li className="mfoptions12">Progressively improve Base Fitness Level and Conditioning over an 8 week period</li>
                            <li className="mfoptions12">Supports Cardiovascular Health, Resting Heart Rate, Heart Rate Variability, Muscle Development, and Reaction Time</li>
                        </ul>
                        <ul>
                            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
                        </ul>
                    </header>
                </div>
            </div>
        </section>
    );
};