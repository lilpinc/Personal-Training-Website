export default function HIITPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/HIIT');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
            <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
                <h2>Full Body HIIT & Strength Movements PDF</h2>
                <p className="description">Want a list of exercise movements you can do to create a strength or HIIT workout for yourself? For only $35 you can utilize the PDF provided by our website to give you variations of functional exercises for the whole body!</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div>
            <img src="/Pictures/pdf.png" alt="pdf" style={{ width: "300px", height: "300px", border: "2px black solid", borderRadius:"10px" }}/>
            <br /><br /><br />
            <button id="formbtn">Preview</button>
            </div>
        </section>
    );
}