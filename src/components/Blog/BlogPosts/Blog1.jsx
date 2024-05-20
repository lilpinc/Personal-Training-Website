export default function Blog1() {

    const returnTo = () => {
        window.location.replace('/Blog');
    };

    return (
        <section className="difference difference2">
            <div className="description">
                <button onClick={returnTo} id="back2" className="return returnbtn">Return</button>
            </div>
            <header className="blogs">
                <h3>How Strength and Stability Training Decrease the Risk of Falls</h3>
                <br />
                <p id="blog-date">Created by Anna Pincus<br />2.2.2024</p>
                <br />
                <p id="blog-post">
                    We've all seen the commercials for life alert with the iconic saying "I've fallen and I can't get up". It is great that we now have devices within hands reach to call for support when we suffer from an injury or require outside assistance. Unfortunately, they don't get to the root of the problem; why we fell in the first place. As we age, especially into the later years of our life (65 and older), the risk of falling increases. For many this risk is just a part of getting older, not something one can actively avoid or prevent. This however, is not true. With the right instruction and exercise the risk of falling can be greatly reduced.</p>
                <p id="blog-post">
                     A higher risk of falling can occur for a multitude of reasons: lack of eyesight, hearing, medical condition, etc. Two of the main causes are a loss in neuromuscular control and muscular degeneration. The human body is a system that needs consistent stimulation to grow and maintain its strength and motor skills. When we are young, we are continuously exposed to new stimuli, also known as stressors, that allow us to physically and mentally learn at an exponential rate. We go to school, we engage in sports, and we spend a good amount of time outside exploring the world. Each year new stressors are added to provide us with the opportunity to progress even further. This continues for a significant part of our lives with ebs and flows in different respective areas. For most, exercise is one of the main stressors that ends up getting put to the wayside as we focus on careers and family life, and in many cases it never gets reintroduced. As months and years go by, tasks that were once relatively easy become increasingly more difficult; running, skipping, jumping, and balancing to name a few. In some unique cases, a skill may be forgotten altogether. So why does this occur if you have no impacting conditions?  At the most basic level, its as the saying goes "use it or lose it". Without stimulation, without stressors and continued repetition, the body begins to regress and lose its muscular strength and memory to complete certain movement patterns. Essentially, the brain forgets how to send the appropriate signals down the body to its associated muscles to create the desired motion.</p>
                <div className="balanceImages">
                    <img src="Pictures/Balance1.jpg" alt="Balance1" id="balance1" className="balance" />
                    <img src="Pictures/Balance2.jpg" alt="Balance1" id="balance2" className="balance" />
                </div>
                <p id="blog-post">Luckily the simple, albeit committing, way to slow down and even alter the regression of these physical limitations is by exposing the body to physical stressors, aka exercise. To limit the risk of falling in particular, a program that incorporates strength, power, and balance work together is suggested. Completing strength focused work stimulates both muscle growth and increased nueromuscular synchronization. Synchronization is the firing of muscles together in efficient unison to create a desired action. While strength focused work alone can increase muscular control, balance exercises  </p>
            </header>

        </section>

    );
}