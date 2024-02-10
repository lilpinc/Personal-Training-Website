
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//components
import Questions from '../../api/Questions';
//styling


function Quiz() {

    let final = document.querySelector(".final-results")
    let questionSection = document.querySelector(".question-section")

    const beginQuiz = () => {

        let hideBtn = document.getElementById("start-quiz");
        let generateQuiz = document.getElementById("quiz");

        hideBtn.setAttribute("style", "display:none");
        generateQuiz.setAttribute("style", "display:block");

    };

    const returnHome = () => {
        window.location.replace('/');
    };

    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState("")
    const [currentLink, setCurrentLink] = useState("");
    const [currentProgram, setcurrentProgram] = useState("");

    useEffect(() => {
        setCurrentQ(Questions[0])
    }, [])

    function handleClickA() {
        console.log("a clicked")
        const nextQ = Questions.find(question => question.id === currentQ.idNextQuestionA)
        if (nextQ) { setCurrentQ(nextQ) }
        else {
            // 
            setcurrentProgram(currentQ.programResultA);
            final.setAttribute("style", "display:block");
            questionSection.setAttribute("style", "display:none");
            setCurrentLink(currentQ.programLinkA);
        }
    }

    function handleClickB() {
        console.log("b clicked")
        const nextQ = Questions.find(question => question.id === currentQ.idNextQuestionB)
        if (nextQ) { setCurrentQ(nextQ) }
        else {
            setcurrentProgram(currentQ.programResultB);
            final.setAttribute("style", "display:block");
            questionSection.setAttribute("style", "display:none");
            setCurrentLink(currentQ.programLinkB);

        }
    }
    function handleClickC() {
        console.log("c clicked")
        const nextQ = Questions.find(question => question.id === currentQ.idNextQuestionC)
        if (nextQ) { setCurrentQ(nextQ) }
        else {
            setcurrentProgram(currentQ.programResultC);
            final.setAttribute("style", "display:block");
            questionSection.setAttribute("style", "display:none");
            setCurrentLink(currentQ.programLinkC);


        }
    }
    function handleClickD() {
        console.log("d clicked")
        const nextQ = Questions.find(question => question.id === currentQ.idNextQuestionD)
        if (nextQ) { setCurrentQ(nextQ) }
        else {
            setcurrentProgram(currentQ.programResultD);
            final.setAttribute("style", "display:block");
            questionSection.setAttribute("style", "display:none");
            setCurrentLink(currentQ.programLinkD);

        }
    }
    function handleClickE() {
        console.log("e clicked")
        const nextQ = Questions.find(question => question.id === currentQ.idNextQuestionE)
        if (nextQ) { setCurrentQ(nextQ) }
        else {
            setcurrentProgram(currentQ.programResultE);
            final.setAttribute("style", "display:block");
            questionSection.setAttribute("style", "display:none");
            setCurrentLink(currentQ.programLinkE);

        }
    }

    return (
        <>
            <section className="library howtogetstarted books">
                <div className="description">
                    <button onClick={returnHome} id="back" className="return-home returnbtn">Return</button>
                    <h2>Program Quiz</h2>
                    <p id="description">Not really sure what program is right for you? Take our quiz and get a recommendation!</p>
                    <button onClick={beginQuiz} id="start-quiz" className="quizbtn">Start Quiz</button>
                </div>
                <article id="quiz" className="program-card2">

                    <div className="final-results">
                        <h2>Program Suggestion Results</h2>
                        <p className="description">We suggest you look into these programs:</p>
                        <h4 className="description" id="program-title"><b>{currentProgram}</b></h4>
                        {/* <p>Based on your answers, we suggest you look at our <span id="program-level"></span>.</p> */}
                        {/* <button id="view-program" className="getstarted2">View Program</button> */}
                        <br />
                        <br />
                        <Link className="getstarted2" id="view-program" to={currentLink}>View Program</Link>
                    </div>

                    <div className="question-section">
                        <p className="question-text"> {currentQ.question}</p>

                        <button id="quizbtns" className="quizbtn" onClick={handleClickA}> {currentQ.answerA} </button>

                        <button id="quizbtns" className="quizbtn" onClick={handleClickB}> {currentQ.answerB} </button>

                        <button id="quizbtns" className="quizbtn" onClick={handleClickC}> {currentQ.answerC} </button>

                        <button id="quizbtns" className="quizbtn" onClick={handleClickD}> {currentQ.answerD} </button>

                        <button id="quizbtns" className="quizbtn" onClick={handleClickE}> {currentQ.answerE} </button>
                    </div>


                    {<br />}
                    {<br />}
                    <Link className="returnbtn" id="view-services" to="/quiz" onClick={() => window.location.reload()}> Restart Quiz </Link>
                </article>
            </section>
        </>

    )
}

export default Quiz;


