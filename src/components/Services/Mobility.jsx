import { Link, useLocation } from 'react-router-dom';
import ViewServices from '../Services/viewServices';

export default function Mobility() {

    const returnServices = () => {
        window.location.replace('/Services');
    };

    const currentPage = useLocation().pathname;


    return (
        <section className="mobilityflexibility howtogetstarted">
            <button onClick={returnServices} id="back" className='returnbtn'>Back</button>
            <header>
                <h1 id="name">Mobility & Flexibility</h1>
            </header>
            <p className="overview">Supports better joint health, decreases chronic pain and stiffness, increases ability to complete activities of daily living. Includes mobility and flexibility exercises for the neck, chest, upper back, arms, lower back, legs, and ankles.</p>
            <div className="mfoptions">
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Mobility & Flexibility 8 Week Progressive Program
                            <br />
                            $65.00</p>
                        <button className="moreinfo" id="moreinfo">
                            <Link
                                to="/Services/Mobility/MobilityEightWeek"
                                className={currentPage === '/Services/Mobility/MobilityEightWeek' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility Over 8 Weeks Through A Pre-Designed Movement Program w/ Guided Videos</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Mobility & Flexibility 'How To' Videos
                            <br />
                            $50.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Mobility/MobilityHowTo"
                                className={currentPage === '/Services/Mobility/MobilityHowTo' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility At Your Own Pace With Guided Videos</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">Mobility & Flexibility PDF
                            <br />
                            $35.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Mobility/MobilityPDF"
                                className={currentPage === '/Services/Mobility/MobilityPDF' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase Mobility & Flexibility At Your Own Pace With A List Of Quality Movements</li>
                            <li className="mfoptions12">Beneficial For All. Best for Individuals That Do Not Require In Depth Instruction</li>
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