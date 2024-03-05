import { Link, useLocation } from 'react-router-dom';
import ViewServices from '../Services/viewServices';

export default function Posture() {
    const currentPage = useLocation().pathname;


    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">Posture & Form Corrections For Basic Movements</h1>
            </header>
            <div className="mfoptions">
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Posture & Form Correction 8 Week Progressive Program
                            <br />
                            $65.00</p>
                        <button className="moreinfo">
                            <Link style={{ textDecoration: "none", color: "black", padding: "5px", backgroundColor: 'lightgray' }}
                                to="/Services/Posture/PostureFormEightWeek"
                                className={currentPage === '/Services/Posture/PostureFormEightWeek' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements Over 8 Weeks Through A Progressively Designed Movement Program w/ Guided Videos</li>
                            <li className="mfoptions12">Includes Pelvic Tilt and Shoulder Position Instruction, Corresponding Mobility Work, and Basic Gym Movement Exercises w/ In Depth Instruction</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Posture & Form 'How to' Videos
                            <br />
                            $50.00</p>
                        <button className="moreinfo">
                            <Link style={{ textDecoration: "none", color: "black", padding: "5px", backgroundColor: 'lightgray' }}
                                to="/Services/Posture/PostureFormHowTo"
                                className={currentPage === '/Services/Posture/PostureFormHowTo' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements w/ Detailed Guided Videos</li>
                            <li className="mfoptions12">Includes Pelvic Tilt and Shoulder Position Instruction, Corresponding Mobility Work, and Basic Gym Movement Exercises w/ In Depth Instruction</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Joint Health</li>
                            <li className="mfoptions12">Decreases Chronic Pain</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Posture & Form PDF
                            <br />
                            $35.00</p>
                        <button className="moreinfo">
                            <Link style={{ textDecoration: "none", color: "black", padding: "5px", backgroundColor: 'lightgray' }}
                                to="/Services/Posture/PostureFormPDF"
                                className={currentPage === '/Services/Posture/PostureFormPDF' ? 'nav-link active' : 'nav-link'}>
                                   More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements At Your Own Pace w/ A List of In-Depth Body Position & Form Instruction</li>
                            <li className="mfoptions12">Includes Pelvic Tilt and Shoulder Position Instruction, Corresponding Mobility Work, and Basic Gym Movement Exercises w/ In Depth Instruction</li>
                            <li className="mfoptions12">Beneficial For All. Best For Individuals That Do Not Require In Depth Instruction</li>
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


