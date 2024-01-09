import { Link, useLocation } from 'react-router-dom';

export default function Running() {

    const currentPage = useLocation().pathname;

    return (
        <section className="mobilityflexibility howtogetstarted">
            <header>
                <h1 id="mobilityflexibility1">Running Training Programs</h1>
            </header>
            <div className="mfoptions">
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/FiveK"
                            className={currentPage === '/FiveK' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption1">5k Training Program PDF
                                <br />
                                $45.00</p>
                        </Link>
                        <ul className="mfopt">
                            <li className="mfoptions12">Increase cardiorespiratory performance, improve race time, and increase strength for 5ks</li>
                            <li className="mfoptions12">Includes Programs for Beginners and Intermediates</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Overall Fitness and Heart Health</li>
                            <li className="mfoptions12">Supports Weight Loss, Increase in Daily Energy Levels, and Quality Sleep</li>
                        </ul>
                    </header>
                </button>
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Half"
                            className={currentPage === '/Half' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption2">Half Marathon Training Program PDF
                                <br />
                                $55.00</p>
                        </Link>
                        <ul className="mfopt">
                        <li className="mfoptions12">Increase cardiorespiratory performance, improve race time, and increase strength for half marathons</li>
                            <li className="mfoptions12">Includes Programs for Beginners and Intermediates</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Overall Fitness and Heart Health</li>
                            <li className="mfoptions12">Supports Weight Loss, Increase in Daily Energy Levels, and Quality Sleep</li>
                        </ul>
                    </header>
                </button>
                <button className="mfoptions0">
                    <header className="mfoptions1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Marathon"
                            className={currentPage === '/Marathon' ? 'nav-link active' : 'nav-link'}>
                            <p className="mfoption3">Marathon Training Program PDF
                                <br />
                                $65.00</p>
                        </Link>
                        <ul className="mfopt">
                        <li className="mfoptions12">Increase cardiorespiratory performance, improve race time, and increase strength for marathons</li>
                            <li className="mfoptions12">Includes Programs for Beginners and Intermediates</li>
                            <li className="mfoptions12">Beneficial For All Ages and Fitness Levels</li>
                            <li className="mfoptions12">Supports Overall Fitness and Heart Health</li>
                            <li className="mfoptions12">Supports Weight Loss, Increase in Daily Energy Levels, and Quality Sleep</li>
                        </ul>
                    </header>
                </button>
            </div>
        </section>


    );
}