import { Link, useLocation } from 'react-router-dom';

export default function FullBody() {

    const currentPage = useLocation().pathname;

    
    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">Full Body Fitness Training Programs</h1>
            </header>
            <div className="mfoptions">
                <button className="mfoptions0">
                    <header className="">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/MobilityEightWeek"
                            className={currentPage === '/MobilityEightWeek' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption1"> Full Body (Body Weight) 3-6 Month Program
                                <br />
                                $100-200</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Strength, Stability, Endurance, Mobility, and Balance with Pre-programmed Fitness Programs</li>
                            <li className="mfoptions12">Includes Body Weight, Dumbbell &/or Bands Only, and Full Gym Access Programs</li>
                            <li className="mfoptions12">Includes Stretching and Mobility Drills, Energy Systems Development Exercises, and Recovery Day Suggestions</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </button>
  
            </div>
        </section>


    );
}