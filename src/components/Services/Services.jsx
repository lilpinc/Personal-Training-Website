import { Link, useLocation } from 'react-router-dom';

export default function Services() {

    const currentPage = useLocation().pathname;

    return (
        <section className="library howtogetstarted bgcolor">
            <header>
                <h2 id="programinfo">Services & Programs</h2>
            </header>
            <p className="overview">Looking for a program that best fits you, your time, and equipment? We provide numerous services from mobility and form guidance videos, body weight home workouts, to full gym access programs and tailored personal training. Check out the services below to see which one is right for you!</p>
            <div className="books">
                <ul className="books">
                    <li className="l1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Services/Mobility"
                            className={currentPage === '/Services/Mobility' ? 'nav-link active' : 'nav-link'}>
                            <button className="programs1" id="mobility">
                                <p className='programtitle'>Mobility & Flexibility Exercises</p>
                            </button>
                        </Link>

                    </li>
                    <li className="l1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Services/Posture"
                            className={currentPage === '/Services/Posture' ? 'nav-link active' : 'nav-link'}>
                            <button className="programs1" id="posture"><p className='programtitle'>Posture & Form Corrections</p></button>
                        </Link>
                    </li>
                    <li className="l1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Services/HIIT"
                            className={currentPage === '/Services/HIIT' ? 'nav-link active' : 'nav-link'}>
                            <button className="programs1" id="HIIT" ><p className='programtitle'>HIIT Fitness Programs</p></button>
                        </Link>
                    </li>
                    <li className="l1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Services/FullBody"
                            className={currentPage === '/Services/FullBody' ? 'nav-link active' : 'nav-link'}>
                            <button className="programs1" id="full"><p className='programtitle'>Strength Training Programs</p></button>
                        </Link>
                    </li>
                    <li className="l1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Services/Online"
                            className={currentPage === '/Services/Online' ? 'nav-link active' : 'nav-link'}>
                            <button className="programs1" id="online"><p className='programtitle'>Online Tailored Personal Training</p></button>
                        </Link>
                    </li>
                    <li className="l1">
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Services/Running"
                            className={currentPage === '/Services/Running' ? 'nav-link active' : 'nav-link'}>
                            <button className="programs1" id="running"><p className='programtitle'>Running Training Programs</p></button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};



