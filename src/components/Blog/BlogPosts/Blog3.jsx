export default function Blog3() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };
    return (
        <section className="difference difference2">
             <div className="description">
            <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
            <header className="blogs">
                <h3>What is A Healthy Diet and How Does Protein Factor In To Weight Loss</h3>
                <br /><br />
            <h4>Coming Soon</h4>
            <img src="Pictures/curry.jpeg" alt="curry" id="curry" />
            <img src="Pictures/fruit.jpeg" alt="fruit" id="curry"/>
            </header>
        </section>
    );
}