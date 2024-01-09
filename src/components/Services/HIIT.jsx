import { Link, useLocation } from 'react-router-dom';

export default function HIIT() {

    const currentPage = useLocation().pathname;

    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">HIIT Programs</h1>
            </header>
            <div className="mfoptions">
                <button className="mfoptions02">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/HIITprograms"
                            className={currentPage === '/HIITprograms' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption1">Full Body HIIT 8 Week Progressive Programs
                                <br />
                                $75.00</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Includes Progressive HIIT Programs for Base Fitness/Conditioning, Endurance, Strength & Power</li>
                            <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Programs</li>
                            <li className="mfoptions12">Includes Workouts 20-40 minutes in Length</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Overall Physical Health and Weight Loss</li>
                            <li className="mfoptions12">Decreases Risk of Heart Related Illness</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </button>
                <button className="mfoptions02">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/HIITvideos"
                            className={currentPage === '/HIITvideos' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption2">Recorded HIIT Workout Videos
                                <br />
                                $65.00</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Includes Independent HIIT Workouts for Base Fitness/Conditioning, Endurance, Strength & Power</li>
                            <li className="mfoptions12">Includes Beginner, Intermediate, and Advanced Workouts</li>
                            <li className="mfoptions12">Includes Workouts 20-40 minutes in Length</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Better Overall Physical Health and Weight Loss</li>
                            <li className="mfoptions12">Decreases Risk of Heart Related Illness</li>
                            <li className="mfoptions12">Decreases Stiffness, Increases ability to complete ADLs</li>
                        </ul>
                    </header>
                </button>
            </div>
        </section>


    );
}