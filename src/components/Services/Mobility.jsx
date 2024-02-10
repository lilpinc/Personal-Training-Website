import { Link, useLocation } from 'react-router-dom';
import ViewServices from '../Services/viewServices';

export default function Mobility() {

    const currentPage = useLocation().pathname;


    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">Mobility & Flexibility</h1>
            </header>
            <div className="mfoptions">
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Full Body Mobility & Flexibility 8 Week Progressive Program
                            <br />
                            $65.00</p>
                        <button className="moreinfo">
                            <Link style={{ textDecoration: "none", color: "black", padding: "5px", backgroundColor: 'lightgray' }}
                                to="/Services/Mobility/MobilityEightWeek"
                                className={currentPage === '/Services/Mobility/MobilityEightWeek' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility Over 8 Weeks Through A Progressively Designed Movement Program w/ Guided Videos</li>
                            <li className="mfoptions12">Includes Neck, Chest, Upper Back, Arms, Lower Back, Legs, and Ankle Mobility & Flexibility Exercises</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                <header className="mfoptions1">
                        <p className="mfoption1">Mobility & Flexibility 'How To' Videos
                            <br />
                            $50.00</p>
                        <button className="moreinfo">
                            <Link style={{ textDecoration: "none", color: "black", padding: "5px", backgroundColor: 'lightgray' }}
                                to="/Services/Mobility/MobilityHowTo"
                                className={currentPage === '/Services/Mobility/MobilityHowTo' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility At Your Own Pace With Guided Videos</li>
                            <li className="mfoptions12">Includes Neck, Chest, Upper Back, Arms, Lower Back, Legs, and Ankle Mobility & Flexibility Exercises</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                <header className="mfoptions1">
                        <p className="mfoption1">Mobility & Flexibility PDF
                            <br />
                            $35.00</p>
                        <button className="moreinfo">
                            <Link style={{ textDecoration: "none", color: "black", padding: "5px", backgroundColor: 'lightgray' }}
                                to="/Services/Mobility/MobilityPDF"
                                className={currentPage === '/Services/Mobility/MobilityPDF' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility At Your Own Pace With A List Of Quality Movements</li>
                            <li className="mfoptions12">Includes Neck, Chest, Upper Back, Arms, Lower Back, Legs, and Ankle Mobility & Flexibility Exercises</li>
                            <li className="mfoptions12">Beneficial For All. Best for Individuals That Do Not Require In Depth Instruction</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </div>
            </div>
            <ViewServices />
        </section>


    );
}