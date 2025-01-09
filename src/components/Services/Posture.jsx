import { Link, useLocation } from 'react-router-dom';
import ViewServices from '../Services/viewServices';

export default function Posture() {
    const currentPage = useLocation().pathname;

    const returnServices = () => {
        window.location.replace('/Services');
    };

    return (
        <section className="mobilityflexibility howtogetstarted">
            <button onClick={returnServices} id="back" className='returnbtn'>Back</button>
            <header>
                <h1 id="name">Posture & Form Corrections For Basic Movements</h1>
            </header>
            <p className="overview">Supports better joint health, decreases chronic pain and stiffness, increases ability to complete activities of daily living. Includes pelvic tilt and shoulder position instruction, corresponding mobility work, and basic gym movement exercises w/ in depth instruction.</p>
            <div className="mfoptions">
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Posture & Form Correction 8 Week Progressive Program
                            <br />
                            $65.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Posture/PostureFormEightWeek"
                                className={currentPage === '/Services/Posture/PostureFormEightWeek' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements Over 8 Weeks Through A Pre-Designed Movement Program w/ Guided Videos</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Posture & Form 'How to' Videos
                            <br />
                            $50.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Posture/PostureFormHowTo"
                                className={currentPage === '/Services/Posture/PostureFormHowTo' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements w/ Detailed Guided Videos</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Posture & Form PDF
                            <br />
                            $35.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Posture/PostureFormPDF"
                                className={currentPage === '/Services/Posture/PostureFormPDF' ? 'nav-link active' : 'nav-link'}>
                                   More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Improve Posture & Correct Form of Basic Body/Lifting Movements At Your Own Pace w/ A List of In-Depth Body Position & Form Instruction</li>
                            <li className="mfoptions12">Beneficial For All. Best For Individuals That Do Not Require In Depth Instruction</li>
                        </ul>
                    </header>
                </div>
            </div>
            <div>
            <ViewServices />
            </div>
        </section>


    );
}


