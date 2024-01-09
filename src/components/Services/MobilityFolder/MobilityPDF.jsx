export default function MobilityPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
                <h2>Full Body Mobility & Flexibility PDF</h2>
                <p className="description">Understand how to mobilize but not sure what muscles to hit, what order you should stretch/mobilize them in or when? For only $35 you can utilize the PDF provided by our website to organize your thoughts!</p>
            </div>
            <div>
                <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <button id="formbtn">Preview</button>
            </div>
        </section>
    );
}