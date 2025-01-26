
export default function Home() {
  // var x = window.matchMedia("(max-width: 567px)")
  // var i = 0;
  // var images = [];

  // images[0] = 'https://img.freepik.com/free-photo/young-man-sportswear-exercise-class-gym_1150-12372.jpg?w=826&t=st=1684973703~exp=1684974303~hmac=0ca400cbecb382434e2bac6076b333da951eb197eed77632934bd3832341a533';
  // images[1] = '/Pictures/meghan-holmes-buWcS7G1_28-unsplash.jpg';
  // images[2] = '/Pictures/sven-mieke-jO6vBWX9h9Y-unsplash.jpg';


  // function changePicture() {

  //   if(document.querySelector(".welcome")) {
  //     document.querySelector(".welcome").style.backgroundImage = "url(" + images[i] + ")";
  //   }

  //   if (i < images.length - 1) {
  //     i++;
  //   } else {
  //     i = 0;
  //   }
  //   setTimeout(changePicture, 6000);
  // }



  const getStarted = () => {
    window.location.replace('/StartNow');
  };

  const startQuiz = () => {
    window.location.replace('/Quiz');
  };

  const goTo = () => {
    window.location.replace('/Services');
  }

  // window.onload = changePicture();
  return (
    // onLoad={changePicture}
    <main >
      <section className="welcome">
        <div className="hero-info">
          <header className="title">
            <h1 className="bold" id="title">Training clients to Move better, Feel better, and most importantly LIVE Better</h1>
          </header>
          <div className="values">
            <div className="value1" >
              <i className="fa-solid fa-check-double"></i>
              Custom Online Nutrition and Fitness Plans
            </div>
            <div className="value1">
              <i className="fa-solid fa-check-double"></i>
              Daily Coach Communication, Guidance and Support
            </div>
            <div className="value1">
              <i className="fa-solid fa-check-double"></i>
              Increase Movement Capabilities and Reduce Pain
            </div>
          </div>
          <img src="/Pictures/drawing.jpg" alt="picture" id="hero-pic" />
        </div>
        <a onClick={getStarted}><button className="getstarted">Get Started</button></a>
      </section>
      <section className="whatismj">
        <header className="catch">
          <h2 className="bold holistic">A Holistic Approach To Fitness To Improve Every Aspect Of Your Life</h2>
        </header>
        <p className="catch4"> We believe in optimizing health, both inside and out. Thats why we provide functional exercise and nutrition plans that adjust to the ebs and flows of your life.</p>
        <div className="values2">
          <div className="card">
            <img className="homepics" src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" />
            <img src="public/pictures/shoe.jpg" alt="shoe" className="shoe" />
            <h4 className="cardinfo">Learn how to move your body to increase performance, reduce pain, and complete daily activities with ease</h4>
          </div>
          <div className="card">
            <img className="homepics" src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            <img src="public/pictures/energy.jpg" alt="energy" className="shoe" />
            <h4 className="cardinfo">Increase your overall energy and decrease stress with daily nutritional, sleep, and physical fitness guidance</h4>
          </div>
          <div className="card">
            <img className="homepics" src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" />
            <img src="public/pictures/clipboard.jpg" alt="clipboard" className="shoe clipboard" />
            <h4 className="cardinfo">Work with a trainer to implement an individualized program that adapts to your weekly schedule, obstacles, and stressors</h4>
          </div>
        </div>
      </section>
      <section className="catch catch2">
        <h2 className="bold bold2">No Matter Where You Are Starting In Your Fitness Journey, We Have A Plan For You</h2>
        <p className="catch3">From stretch and mobility routines to strength, HIIT, and running programs, we have what you need.  We also provide plans for ranging levels of workout equipment access.</p>
        <div>
          <div className="cardtop">
            <img className="homeicons" src="public/pictures/support.jpg" alt="support" />
            <div className="card2">
              <header className="card3">
                <h4>
                  Flexible Plans & Daily Support
                </h4>
              </header>
              <p className="note1">Progress isn't always linear and each person is unique. You want a regimen that is tailored to your fitness goals and lifestyle. We are here to guide and support you to where you want to be. Our daily communication service ensures that your planned workouts and nutrition goals match up with what is happening in your life so that you can optimize your health and performance.</p>
            </div>
          </div>
          <div className="cardtop">
            <div className="card2">
              <header className="card3">
                <h4>
                  Functional Programs For Overall Health
                </h4>
              </header>
              <p className="note1">Along with our video tutorials, each exercise plan includes mobility, flexibility, balance, plyometric, and energy system drills. These aspects can support healthy joint movement, reduce risk of chronic disease events, and decrease movement related injuries such as falls from tripping or contact sport interactions.</p>
            </div>
            <img className="homeicons" src="public/pictures/health.jpg" alt="support" />
          </div>
          <div className="cardtop">
            <img id="iphone" className="homeicons" src="public/pictures/iphone.jpg" alt="support" />
            <div className="card2">
              <header className="card3">
                <h4>
                  Workouts You Can Take With You Anywhere
                </h4>
              </header>
              <p className="note1">Our lives can get very busy. You might not have the availability to meet up in person with a trainer every week. That's why we provide online programs you can view right from your phone. Each exercise has a corresponding video that goes over form and function. Want more assistance? Opt for our personal training plan that includes daily direct message with a trainer.</p>
            </div>
          </div>
        </div>
        <button onClick={goTo} id="view-services" >View All Services</button>
      </section>
      <section className="whatismj">
        <header className="catch padding">
          <h1 className="bold holistic">How to Reach Your Goals</h1>
          <article className="start">
            <div className="numbers">
              <h1 className="bignumbers">1</h1>
              <div className="context-number">
                <h5 className="number1">Initiate</h5>
                <p className="number">Pick a Program, Subscribe, Receive a Consultation</p>
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
                <p className="number">Communicate, Train, Recover Well, See Results</p>
              </div>
            </div>
          </article>
          <div className="notsure">
            <h3 className="catch3">Not really sure what program is right for you? Take our quiz and get a recommendation!</h3>
            <button onClick={startQuiz} id="homequizbtn">Start Quiz</button>
          </div>
        </header >
      </section >
      <section className="catch2">
        <header className="catch">
          <h2 className="holistic">What Clients Have to Say About ABP Fitness</h2>
          <div className="values2">
            <div className="testimonial greenbck">
              <h4 className="testimonialinfo">"I love the flexibility that online training provides. And to have help with my nutrition as well is huge. She is responsive, encouraging, and has helped me get real results from my program."</h4>
              <img className="testpics" src="public/pictures/tyler.jpg
" alt="male photo" />
              <p>-Tyler</p>
            </div>
            <div className="testimonial greenbck">
              <h4 className="testimonialinfo">"Anna is so much more than a personal trainer. She has essentially been my life coach, checking in with me daily. Knowing that she is checking in on me every day and holding each other accountable, our relationship is very special to me."</h4>
              <img className="testpics" src="public/pictures/kendall.jpg
" alt="female photo" />
              <p>-Kendall</p>
            </div>
          </div>
        </header>
      </section>
    </main>
  );
}