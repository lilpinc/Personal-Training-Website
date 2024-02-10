export default function Blog3() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };
    return (
        <section className="difference">
             <div className="description">
            <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
            <header className="blogs">
                <h3>How Strength Training Impacts Age Related Muscle Degeneration</h3>
            </header>
        </section>
    );
}