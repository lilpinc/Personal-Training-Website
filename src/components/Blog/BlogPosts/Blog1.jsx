export default function Blog1() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };

    return (
        <section className="difference">
            <div className="description">
                <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
            <header className="blogs">
                <h3>How Strength and Stability Training Decrease the Risk of Falls</h3>
                <br />
                <p id="blog-date">Created by Anna Pincus<br />2.2.2024</p>
                <br />
                <p id="blog-post">
                    We've all seen the commercials for life alert with the iconic saying "I've fallen and I can't get up". It is truly amazing that we now have devices within hands reach to call for support when we suffer from an injury or require outside assistance. Unfortunately, these services are only reactory; they cannot prevent falls. As we age, especially into the later years of our life (65 and older), the risk of falling increases. For many this risk is deemed as just a part of getting older, not something that can be actively avoided or prevented. This, however is not accurate; with the right instruction and exercise the risk of falling can be greatly reduced.</p>
                <p id="blog-post">
                    A higher risk of falling can occur for a multitude of reasons: lack of eyesight, hearing, medical condition, etc. Two of the main causes are a loss in neuromuscular control and muscular degeneration. The human body is a system that needs consistent stimulation to grow and maintain its progression. When we are young, we are continuously exposed to new stimuli, also known as stressors, that allows us to grow exponentially. We go to school to expand our minds, we engage in sports to build our muscle and fine motor skills, and we spend a good amount of our time with friends outside exploring and learning about the world. Each year new stressors in the form of increased difficulty in class material and level of sports play, provides us with the opportunity to progress even further. This continues for a significant part of our lives with ebs and flows in different respective areas. For most, exercise is one of the main stressors that ends up getting put to the wayside as we focus on careers and/or family life, and in many cases it never gets reintroduced. As months and years go by, tasks that were once relatively easy become increasingly more difficult. In rare cases, one might even find that they have forgotten how to complete a task all together. Running, skipping, jumping, and balancing to name a few. So why does this occur?  At the most basic level, its as the saying goes "use it or lose it". Without stimulation, without stressors and continued repetition, the body begins to regress and lose its muscular strength and memory to complete certain movement patterns. Essentially, the brain has forgotten how to send the appropriate signals down the body to the associated muscles required to create the desired motion.</p> 
                    <div className="balanceImages">
                    <img src="Pictures/Balance1.jpg" alt="Balance1" id="balance1" className="balance" />
                    <img src="Pictures/Balance2.jpg" alt="Balance1" id="balance2" className="balance" />
                </div>
                {/* Muscle weakness/degeneration, stability muscle use, power drills, etc. */} 
                <p id="blog-post">Luckily the simple, albeit committing, way to slow down and even alter the regression of these physical limitations is by exposing the body to physical stressors, aka exercise. </p>
            </header>

        </section>

    );
}