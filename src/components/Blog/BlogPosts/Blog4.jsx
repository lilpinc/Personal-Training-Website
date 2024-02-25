export default function Blog4() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };
    return (
        <section className="difference">
             <div className="description">
            <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
            <header className="blogs">
                <h3>What Is a Pelvic Tilt and How Does It Affect Back Pain?</h3>
                <br /><br />
            <h4>Coming Soon</h4>
            </header>
        </section>

    );
}