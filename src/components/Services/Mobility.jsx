import { Link, useLocation } from 'react-router-dom';

export default function Mobility() {

    const currentPage = useLocation().pathname;


    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">Mobility & Flexibility</h1>
            </header>
            <div className="mfoptions">
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/MobilityEightWeek"
                            className={currentPage === '/MobilityEightWeek' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption1">Full Body Mobility & Flexibility 8 Week Progressive Program
                                <br />
                                $65.00</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility Over 8 Weeks Through A Progressively Designed Movement Program w/ Guided Videos</li>
                            <li className="mfoptions12">Includes Neck, Chest, Upper Back, Arms, Lower Back, Legs, and Ankle Mobility & Flexibility Exercises</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </button>
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/MobilityHowTo"
                            className={currentPage === '/MobilityHowTo' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption2">Mobility & Flexibility Exercise 'How to' Videos
                                <br />
                                $50.00</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility At Your Own Pace With Guided Videos</li>
                            <li className="mfoptions12">Includes Neck, Chest, Upper Back, Arms, Lower Back, Legs, and Ankle Mobility & Flexibility Exercises</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </button>
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/MobilityPDF"
                            className={currentPage === '/MobilityPDF' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption3">Mobility & Flexibility Exercises PDF
                                <br />
                                $35.00</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility At Your Own Pace With A List Of Quality Movements</li>
                            <li className="mfoptions12">Includes Neck, Chest, Upper Back, Arms, Lower Back, Legs, and Ankle Mobility & Flexibility Exercises</li>
                            <li className="mfoptions12">Beneficial For All. Best for Individuals That Do Not Require In Depth Instruction</li>
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