export default function PostureFormPDF() {

    const getStarted = () => {
        window.location.replace('/StartNow');
    };

    return (
        <section className="library books howtogetstarted">
            <div className="description">
                <h2>Posture & Form PDF</h2>
                <p className="description">Want some pointers/cues on how to align your body and exercise with correct form? For only $35 you can utilize the PDF provided by our website to give you detailed instruction on basic movements and how to set yourself back in alignment!</p>
            </div>
            <div>
            <a onClick={getStarted}><button className="getstarted2">Get Started</button></a>
            </div>
            <li className="mfoptions12"><button id="formbtn">Preview</button></li>
            <img src="" alt="" />
        </section>
    );
}