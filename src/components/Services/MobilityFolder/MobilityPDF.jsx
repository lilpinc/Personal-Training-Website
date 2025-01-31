export default function MobilityPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Mobility');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
            <div>
                <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Full Body Mobility & Flexibility PDF</h2>
                </header>
                <p className="overview">Want a list of mobility and stretch movements that provide insight on how to maximize relief? The PDF provided by our website to organize your mobilization exercises.</p>
                <p className="overview">PDF Access:</p>
                <br />
                <p>$35.00</p>
                <div>
                    <button onClick={getStarted} className="getstarted2">Get Started</button>
                </div>
            </div>
            <div>
                <img className="clipboardpic" src="/Pictures/pdf.png" alt="pdf"/>
                <br /><br /><br />
                <button id="formbtn">Preview</button>
            </div>
        </section>
    );
}