import { Link, useLocation } from 'react-router-dom';
import ViewServices from '../Services/viewServices';

export default function Running() {

    const currentPage = useLocation().pathname;

    const returnServices = () => {
        window.location.replace('/Services');
    };

    return (
        <section className="mobilityflexibility howtogetstarted">
            <button onClick={returnServices} id="back" className='returnbtn'>Back</button>
            <header>
                <h1 id="name">Running Training Programs</h1>
            </header>
            <p className="overview">Includes Programs for Beginners and Intermediates. Supports heart health, weight loss, sleep quality, and daily energy levels.</p>
            <div className="mfoptions">
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption1">5k Training Program PDF
                            <br />
                            $45.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Running/FiveK"
                                className={currentPage === '/Services/Running/FiveK' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase cardiorespiratory performance, improve race time, and increase strength for 5ks</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption2">Half Marathon Training Program PDF
                            <br />
                            $55.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Running/Half"
                                className={currentPage === '/Services/Running/Half' ? 'nav-link active' : 'nav-link'}>
                                More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase cardiorespiratory performance, improve race time, and increase strength for half marathons</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
                <div className="mfoptions0">
                    <header className="mfoptions1">
                        <p className="mfoption3">Marathon Training Program PDF
                            <br />
                            $65.00</p>
                        <button className="moreinfo">
                            <Link
                                to="/Services/Running/Marathon"
                                className={currentPage === '/Services/Running/Marathon' ? 'nav-link active' : 'nav-link'}>
                                    More Information
                            </Link>
                        </button>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase cardiorespiratory performance, improve race time, and increase strength for marathons</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                        </ul>
                    </header>
                </div>
            </div>
            <ViewServices />
        </section>


    );
}