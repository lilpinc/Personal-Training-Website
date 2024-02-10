export default function PostureFormPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };
    const returnTo = () => {
        window.location.replace('/Posture');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
            <button onClick={returnTo} id="back" className="return returnbtn">Return</button>
                <h2>Posture & Form PDF</h2>
                <p className="description">Want some pointers/cues on how to align your body and exercise with correct form? For only $35 you can utilize the PDF provided by our website to give you detailed instruction on basic movements and how to set yourself back in alignment!</p>
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