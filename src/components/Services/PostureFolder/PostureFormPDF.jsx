export default function PostureFormPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Services/Posture');
    };

    return (
        <section className="books mobilityflexibility howtogetstarted">
             <div>
            <button onClick={returnTo} id="back" className="return returnbtn">Back</button>
                <header>
                    <h2 id="name">Posture & Form PDF</h2>
                </header>
                <p className="overview">Want some pointers/cues on how to align your body and exercise with correct form? The PDF provided by our website gives you detailed instruction on basic movements and how to set yourself back in alignment!</p>
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