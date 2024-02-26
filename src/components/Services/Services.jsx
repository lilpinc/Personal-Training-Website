import { Link, useLocation } from 'react-router-dom';

export default function Services() {

    const currentPage = useLocation().pathname;

    return (
        <section className="library howtogetstarted">
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
                                 <button className="programs1" id="mobility">Mobility & Flexibility Exercises</button>
                            </Link>
                        
                    </li>
                    <li className="l1">
                            <Link style={{ textDecoration: "none", color: "white" }}
                                to="/Services/Posture"
                                className={currentPage === '/Services/Posture' ? 'nav-link active' : 'nav-link'}>
                                <button className="programs1" id="posture">Posture & Form Corrections For Basic Movements</button>
                            </Link>
                    </li>
                    <li className="l1">
                            <Link style={{ textDecoration: "none", color: "white" }}
                                to="/Services/HIIT"
                                className={currentPage === '/Services/HIIT' ? 'nav-link active' : 'nav-link'}>
                                <button className="programs1" id="HIIT" >HIIT Fitness Programs</button>
                            </Link>
                    </li>
                    <li className="l1">
                            <Link style={{ textDecoration: "none", color: "white" }}
                                to="/Services/FullBody"
                                className={currentPage === '/Services/FullBody' ? 'nav-link active' : 'nav-link'}>
                                 <button className="programs1" id="full">Full Body Fitness Training Programs (Bodyweight, DB & Bands, Gym Access)</button>
                            </Link>
                    </li>
                    <li className="l1">
                            <Link style={{ textDecoration: "none", color: "white" }}
                                to="/Services/Online"
                                className={currentPage === '/Services/Online' ? 'nav-link active' : 'nav-link'}>
                                <button className="programs1" id="online"> Online Tailored Personal Training</button>
                            </Link>
                    </li>
                    <li className="l1">
                            <Link style={{ textDecoration: "none", color: "white" }}
                                to="/Services/Running"
                                className={currentPage === '/Services/Running' ? 'nav-link active' : 'nav-link'}>
                                <button className="programs1" id="running">Running Training Programs (5k, 10k, Half & Full Marathon)</button>
                            </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};



