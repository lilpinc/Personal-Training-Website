export default function Blog2() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };

    return (
        <section className="difference difference2">
             <div className="description">
            <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
        <header className="blogs">
            <h3>The Effects of Fitness Training on Heart Health</h3>
            <br /><br />
            <h4>Coming Soon</h4>
        </header>
    </section>

    );
}
    