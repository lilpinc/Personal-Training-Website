import { Link, useLocation } from 'react-router-dom';
import ViewServices from '../Services/viewServices';

export default function HIIT() {

    const currentPage = useLocation().pathname;

    const returnServices = () => {
        window.location.replace('/Services');
    };

    return (
        <section className="mobilityflexibility howtogetstarted">
            <button onClick={returnServices} id="back" className='returnbtn'>Back</button>
            <header>
                <h1 id="name">HIIT Programs</h1>
            </header>
            <p className="overview">High Intensity Interval Workouts 20-40 minutes in length that supports weight loss, decreased risk of heart related illness, and increased ability to complete activities of daily living. Beginner, Intermediate, and advanced programs included.</p>
            <div className="mfoptions">
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Full Body HIIT 8 Week Progressive Programs
                            <br />
                            $75.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/HIIT/HIITprograms"
                                className={currentPage === '/Services/HIIT/HIITprograms' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Includes Pre-Designed 8 Week HIIT Program for Base Fitness/Conditioning, Endurance, Strength & Power</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Recorded HIIT Workout Videos
                            <br />
                            $65.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/HIIT/HIITvideos"
                                className={currentPage === '/Services/HIIT/HIITvideos' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Includes Independent HIIT Workout Videos for Base Fitness/Conditioning, Endurance, Strength & Power</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Full Body HIIT & Strength Movements PDF
                            <br />
                            $35.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/HIIT/HIITPDF"
                                className={currentPage === '/Services/HIIT/HIITPDF' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Includes list of Exercise Movements for Base Fitness/Conditioning, Endurance, Strength & Power</li>
                            <li className="mfoptions12">Beneficial For All. Best for Individuals That Do Not Require In Depth Instruction</li>
                        </ul>
                    </header>
                </div>
            </div>
            <ViewServices />
        </section>


    );
}