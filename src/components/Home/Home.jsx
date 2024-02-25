
export default function Home() {

  var i = 0;
  var images = [];

  images[0] = 'https://img.freepik.com/free-photo/young-man-sportswear-exercise-class-gym_1150-12372.jpg?w=826&t=st=1684973703~exp=1684974303~hmac=0ca400cbecb382434e2bac6076b333da951eb197eed77632934bd3832341a533';
  images[1] = '/Pictures/meghan-holmes-buWcS7G1_28-unsplash.jpg';
  images[2] = '/Pictures/sven-mieke-jO6vBWX9h9Y-unsplash.jpg';


  function changePicture() {
  
    if (document.querySelector(".welcome")) {
      document.querySelector(".welcome").style.backgroundImage = "url(" + images[i] + ")";
    }

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout(changePicture, 6000);
  }

  

  const getStarted = () => {
    window.location.replace('https://abpfitness.netlify.app/StartNow');
  };

  const startQuiz = () => {
    window.location.replace('https://abpfitness.netlify.app/Quiz');
  };

  const goTo = () => {
    window.location.replace('https://abpfitness.netlify.app/Services');
  }
 
  window.onload = changePicture();
  return (

    <main onLoad={changePicture}>
      <section className="welcome">
        <header className="title">
          <h1 className="bold" id="title">Helping clients Move better, Feel better, and most importantly LIVE Better</h1>
        </header>
        <div className="values">
          <div className="value1" >
            <i className="fa-solid fa-check-double"></i>
            Custom Online Nutrition and Fitness Plans
          </div>
          <div className="value1">
            <i className="fa-solid fa-check-double"></i>
            Get Daily Coach Communication, Guidance and Support
          </div>
          <div className="value1">
            <i className="fa-solid fa-check-double"></i>
            Increase your Movement Capabilities and Reduce Pain
          </div>
        </div>
        <a onClick={getStarted}><button className="getstarted">Get Started</button></a>
      </section>
      <section className="whatismj">
        <header className="catch">
          <h2 className="bold">ABP Fitness Creates A Holistic Approach To Fitness To Improve Every Aspect Of Your Life</h2>
        </header>
        <p className="catch4"> We believe in optimizing health, both inside and out. Thats why we provide functional exercise and nutrition plans that adjust to the ebs and flows of your life.</p>
        <div className="values2">
          <div className="card">
            <img className="homepics" src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" />
            <h4 className="cardinfo">Learn how to move your body to increase performance, reduce pain, and complete daily activities with ease</h4>
          </div>
          <div className="card">
            <img className="homepics" src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            <h4 className="cardinfo">Increase your overall energy and decrease stress with daily nutritional, sleep, and physical fitness guidance</h4>
          </div>
          <div className="card">
            <img className="homepics" src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" />
            <h4 className="cardinfo">Work with a trainer who creates programs that adapt to your weekly schedule, obstacles, and stressors</h4>
          </div>
        </div>
      </section>
      <section className="difference">
        <header className="catch2">
          <h2 className="bold">No Matter Where You Are Starting In Your Fitness Journey, We Have A Plan For You</h2>

          <p className="catch3">Want to increase your flexibility and improve your balance? We have that. Want to strengthen and tone through bodyweight movements? We got you. Full gym access or maybe just dumbbells and a few bands? Yup, that too.</p>
          <div className="cardtop">
            <div className="card2">
              <header className="card3">
                <h4>
                  <i className="fa-solid fa-star"></i>
                  Flexible Plans & Daily Support
                </h4>
              </header>
              <p className="note1">We all start somewhere, and thats what is so exciting! There is so much room to grow in your own unique way, at a pace that works with your lifestyle. At movement junky we know progress isn't always linear, we expect there to be some up and downs! We are here to guide and support you through it all to get you to where you want to be. Our daily communication service ensures that your planned workouts and nutrition goals match up with what is happening in your life each day so that you can optimize your health and performance.</p>
            </div>
            <div className="card2">
              <header className="card3">
                <h4>
                  <i className="fa-solid fa-star"></i>
                  Functional Programs For Healthy Movement
                </h4>
              </header>
              <p className="note1">Its amazing how great you can feel and move when a training program focuses on more than just strength. Along with our separate video tutorials, each workout plan provided through our website includes mobility, flexibility, balance, plyometric, and energy system drills. By incorporating these aspects to each training module, we support healthy joint movement, a reduced risk of cardiovascular and other chronic disease events, and a reduced risk of athletic and daily activity related injuries such as falls from tripping or contact sport interactions.</p>
            </div>
            <div className="card2">
              <header className="card3">
                <h4>
                  <i className="fa-solid fa-star"></i>
                  Workouts You Can Take With You Anywhere
                </h4>
              </header>
              <p className="note1">Our lives can get very busy. You might not have the availability to meet up in person with a trainer multiple times a week. Thats why we provide online programs that you can pull up right from your phone wherever you are. Each exercise has a corresponding video that goes over form and function. If you want or need more assistance, opt for our personal training plan where you have daily communication with our trainer and can discuss each movement in detail to ensure proper form.</p>
            </div>
          </div>
          <button onClick={goTo} id="view-services" className="returnbtn">View All Services</button>
        </header>
      </section>
      <section className="howtogetstarted">
        <header className="catch">
          <h1 className="bold">Get Started</h1>
          <h3 className="catch3 mfoptions">Not really sure what program is right for you? Take our quiz and get a recommendation!</h3>
          <button onClick={startQuiz} id="formbtn">Start Quiz</button>
          <article className="start">
            <div className="numbers">
              <h1 className="bignumbers">1</h1>
              <div className="context-number">
                <h5 className="number1">Initiate</h5>
                <p className="number">Pick A Program, Subscribe, Receive A Consultation</p>
              </div>
            </div>
            <div className="numbers">
              <h1 className="bignumbers">2</h1>
              <div className="context-number">
                <h5 className="number1">Energize</h5>
                <p className="number">Complete Workouts & Follow Nutrition Guidelines</p>
              </div>
            </div>
            <div className="numbers">
              <h1 className="bignumbers">3</h1>
              <div className="context-number">
                <h5 className="number1">Fortify</h5>
                <p className="number">Communicate With Trainer, Recover, Get Results</p>
              </div>
            </div>
          </article>
          <br />
        </header >
      </section >

    </main>
  );
}