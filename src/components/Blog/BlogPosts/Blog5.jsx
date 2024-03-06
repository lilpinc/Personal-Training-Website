export default function Blog5() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };
    return (
        <section className="difference difference2">
             <div className="description">
            <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
        <header className="blogs">
            <h3>How Can I Tell If My Knee Pain Is Muscular or Not?</h3>
            <br /><br />
            <h4>Coming Soon</h4>
        </header>
    </section>

    );
}