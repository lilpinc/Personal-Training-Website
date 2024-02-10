export default function Blog1() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };

    return (
        <section className="difference">
             <div className="description">
            <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
            <header className="blogs">
                <h3>How Strength and Stability Training Decrease the Risk of Falls</h3>
                <br />
                <p id="blog-date">Created by Anna Pincus<br />2.2.2024</p>
                <br />
                <p id="blog-post">
                    We've all seen the commercials for life alert with the iconic saying "I've fallen and I can't get up". It is truly amazing that we now have these kind of devices within hands reach when we are injured or need outside help. Unfortunately, these services are only reactory; they cannot prevent falls. While there is a risk of falling at any age, it becomes more heightened in the later years of our lives, especially for individuals 65 and older. For many this risk is deemed as just a part of aging, not something they can actively avoid or prevent. This, however is not accurate. With the right instruction and exercise the risk of falling can be greatly reduced.
                    <br /><br />
                    Muscle weakness/degeneration, stability muscle use, power drills, etc.</p>
            </header>
            
        </section>

    );
}