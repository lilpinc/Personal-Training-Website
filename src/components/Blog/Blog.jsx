import { Link, useLocation } from 'react-router-dom';

export default function Blog() {

    const currentPage = useLocation().pathname;

    return (
        <>
            <section className="blog">
                <h2 className="blog-title">Interested in learning more about fitness and its health benefits? Check out our fitness blogs below!</h2>
                <div className="blogposts">
                    <article>
                        <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Blog1"
                            className={currentPage === '/Blog1' ? 'nav-link active' : 'nav-link'}>
                            <button className="blogpost">How Strength and Stability Training Decrease the Risk of Falls</button>
                        </Link>
                    </article>
                    <article>
                    <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Blog2"
                            className={currentPage === '/Blog2' ? 'nav-link active' : 'nav-link'}>
                            <button className="blogpost">The Effects of Fitness Training on Heart Health</button>
                        </Link>
                    </article>
                    <article>
                    <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Blog3"
                            className={currentPage === '/Blog3' ? 'nav-link active' : 'nav-link'}>
                            <button className="blogpost">How does Strength Training Impact Age Related Muscle Degeneration</button>
                        </Link>
                    </article>
                    <article>
                    <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Blog4"
                            className={currentPage === '/Blog4' ? 'nav-link active' : 'nav-link'}>
                            <button className="blogpost">What Is a Pelvic Tilt and How Does It Affect Back Pain?</button>
                        </Link>
                    </article>
                    <article>
                    <Link style={{ textDecoration: "none", color: "white" }}
                            to="/Blog5"
                            className={currentPage === '/Blog5' ? 'nav-link active' : 'nav-link'}>
                            <button className="blogpost">How Can I Tell If My Knee Pain Is Muscular or Not?</button>
                        </Link>
                    </article>
                </div>
            </section>
        </>
    );
};