export default function MobilityPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Mobility');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
            <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
                <h2>Full Body Mobility & Flexibility PDF</h2>
                <p className="description">Understand how to mobilize but not sure what muscles to hit, what order you should stretch/mobilize them in or when? For only $35 you can utilize the PDF provided by our website to organize your thoughts!</p>
                <button onClick={getStarted} className="getstarted2">Get Started</button>
            </div>
            <div>
            <img id="clipboard" src="/Pictures/pdf.png" alt="pdf" style={{ width: "300px", height: "300px", border: "2px black solid", borderRadius:"10px" }}/>
            <br /><br /><br />
            <button id="formbtn">Preview</button>
            </div>
        </section>
    );
}