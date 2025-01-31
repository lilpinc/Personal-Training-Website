export default function HIITPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/HIIT');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
             <div>
            <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Full Body HIIT & Strength Movements PDF</h2>
                </header>
                <p className="overview">Want a list of exercise movements you can do to create a strength or HIIT workout for yourself? The PDF provided by our website to give you variations of functional exercises for the whole body!</p>
                <p className="overview">PDF Access:</p>
                <br />
                <p>$35.00</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div>
                <img className="clipboardpic" src="/Pictures/pdf.png" alt="pdf"/>
                <br /><br /><br />
                <button id="formbtn">Preview</button>
            </div>
        </section>
    );
}