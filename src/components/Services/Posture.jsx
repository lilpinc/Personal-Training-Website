import { Link, useLocation } from 'react-router-dom';
export default function Posture() {
    const currentPage = useLocation().pathname;


    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">Posture & Form Corrections For Basic Movements</h1>
            </header>
            <div className="mfoptions">
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/PostureFormEightWeek"
                            className={currentPage === '/PostureFormEightWeek' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption1">Posture & Form Correction 8 Week Progressive Program
                                <br />
                                $65.00</p>
                        </Link>
                            <ul>
                                <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements Over 8 Weeks Through A Progressively Designed Movement Program w/ Guided Videos</li>
                                <li className="mfoptions12">Includes Pelvic Tilt and Shoulder Position Instruction, Corresponding Mobility Work, and Basic Gym Movement Exercises w/ In Depth Instruction</li>
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
                            to="/PostureFormHowTo"
                            className={currentPage === '/PostureFormHowTo' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption2">Posture & Form 'How to' Videos
                                <br />
                                $50.00</p>
                        </Link>
                            <ul>
                                <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements w/ Guided Videos</li>
                                <li className="mfoptions12">Includes Pelvic Tilt and Shoulder Position Instruction, Corresponding Mobility Work, and Basic Gym Movement Exercises w/ In Depth Instruction</li>
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
                            to="/PostureFormPDF"
                            className={currentPage === '/PostureFormPDF' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption3">Posture & Form PDF
                                <br />
                                $35.00</p>
                        </Link>
                            <ul>
                                <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements At Your Own Pace w/ A List of In-Depth Body Position & Form Instruction</li>
                                <li className="mfoptions12">Includes Pelvic Tilt and Shoulder Position Instruction, Corresponding Mobility Work, and Basic Gym Movement Exercises w/ In-Depth Instruction</li>
                                <li className="mfoptions12">Beneficial For All Ages and Fitness Level, Best for Individuals That Do Not Require In Depth Functional Movement Instruction</li>
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


