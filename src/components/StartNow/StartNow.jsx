import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
// import validate email from helper.js
import { validateEmail } from "../../utils/helpers";


export default function StartNow() {

    const form = useRef();
    // use state so that input fields dynamically change depending on the users input/lack of input
    const [email, setEmail] = useState("");
    const [name, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // validate name input
    const validateName = (e) => {
        const { name, value } = e.target;
        if (name === "user_name") {
            setUserName(value);
            if (value === "") {
                setUserName("");
                setErrorMessage('Please enter a name.')
            }
        }
        // if the value is more than 0, do not show the error message
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };
    // validate email input
    const validatingEmail = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === "user_email") {
            setEmail(value);
            // if the value is validated, do not show the error message, if it does not match, show error message
            if (value === "" || !validateEmail(value)) {
                setEmail("");
                setErrorMessage(
                    `Please enter a valid email address.`
                )
            } else {
                setErrorMessage("");
            }
        }
    };

    // validate message input
    const validateMessage = (e) => {
        const { name, value } = e.target;
        setMessage(value);
        if (name === "user_message") {
            if (value === "") {
                setMessage("");
                setErrorMessage(`Please enter a message.`);
            }
        }
        // if the value is more than 0, do not show the error message
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };
    // validate that everything is filled out when submitting the form. Last check before submission
    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !name) {
            alert("username or email is invalid")
            return;
        }
        if (!message) {
            alert("Message is required.");
            return;
        }
        emailjs.sendForm('service_bwotmzn', 'template_q1tjkf6', form.current, 'YDOvY-Lk7P8bWkk1r')
            .then((result) => {
                console.log(result.text);
                alert("message sent!")
                // should clear out inputs, will need to fix because not functional at the moment
                setUserName("");
                setMessage("");
                setEmail("");
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
    };
    return (
        <section className="contact howtogetstarted">
            <h2 id="signup-title">Sign-Up Form</h2>
            <h5 id="signup-title">Thank you for your interest!<br />We are still in the process of setting up direct purchase, if interested please fill out the form below and we will contact you!</h5>
            <article className="signup">
                <section className="contactforms1">
                    <form className="form2" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <label for="name">Your name:</label>
                            <input type="text" onBlur={validateName} id="name2" defaultValue={name} name="user_name" placeholder='name' required style={{width:"30vw"}} />
                        </div>
                        <div className="row">
                            <label for="email">Your email:</label>
                            <input type="email" onBlur={validatingEmail} id="email" defaultValue={email} name="user_email" placeholder='email' required style={{width:"30vw"}} />
                        </div>
                        <p>I am interested in signing-up and receiving payment information for the included programs:</p>
                        <div className="check">
                            <div className="boxes">
                                <ul className="form-boxes">
                                    <u>Full Body Fitness</u>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_EightWeek_Beginner" value="Full_Body_EightWeek_Beginner" /> 8 Week Full Body Base Fitness Training (Beginner)
                                    </li>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_EightWeek_Intermediate" value="Full_Body_EightWeek_Intermediate"  /> 8 Week Full Body Base Fitness Training (Intermediate)
                                    </li>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_EightWeek_Advanced" value="Full_Body_EightWeek_Advanced" /> 8 Week Full Body Base Fitness Training (Advanced)
                                    </li>
                                    <hr />
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_SixteenWeek_Beginner" value="Full_Body_SixteenWeek_Beginner" /> 16 Week Full Body Base Fitness Training (Beginner)
                                    </li>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_SixteenWeek_Intermediate" value="Full_Body_SixteenWeek_Intermediate" /> 16 Week Full Body Base Fitness Training (Intermediate)
                                    </li>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_SixteenWeek_Advanced" value="Full_Body_SixteenWeek_Advanced" /> 16 Week Full Body Base Fitness Training (Advanced)
                                    </li>
                                    <hr />
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_TwentyFourWeek_Beginner" value="Full_Body_TwentyFourWeek_Beginner" /> 24 Week Full Body Base Fitness Training (Beginner)
                                    </li>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_TwentyFourWeek_Intermediate" value="Full_Body_TwentyFourWeek_Intermediate" /> 24 Week Full Body Base Fitness Training (Intermediate)
                                    </li>
                                    <li>
                                        <input type="checkbox" id="full" name="Full_Body_TwentyFourWeek_Advanced" value="Full_Body_TwentyFourWeek_Advanced" /> 24 Week Full Body Base Fitness Training (Advanced)
                                    </li>
                                    <hr />
                                </ul>
                            </div>
                            <ul className="form-boxes">
                                <u>Mobility & Flexibility</u>
                                <li>
                                    <input type="checkbox" id="mobility-flexibility" name="Mobility_Flexibility_EightWeek" value="Mobility_Flexibility_EightWeek" /> Mobility & Flexibility 8 Week Program
                                </li>
                                <li>
                                    <input type="checkbox" id="mobility-flexibility" name="Mobility_Flexibility_Videos" value="Mobility_Flexibility_Videos" /> Mobility & Flexibility Videos
                                </li>
                                <li>
                                    <input type="checkbox" id="mobility-flexibility" name="Mobility_Flexibility_PDF" value="Mobility_Flexibility_PDF" /> Mobility & Flexibility PDF
                                </li>
                                <hr />
                            </ul>
                            <ul className="form-boxes">
                                <u>Posture & Form Correction</u>
                                <li>
                                    <input type="checkbox" id="posture" name="Posture_EightWeek" value="Posture_EightWeek" /> Posture & Form Corrections 8 Week Program
                                </li>
                                <li>
                                    <input type="checkbox" id="posture" name="Posture_Videos" value="Posture_Videos" /> Posture & Form Corrections Videos
                                </li>
                                <li>
                                    <input type="checkbox" id="posture" name="Posture_PDF" value="Posture_PDF" /> Posture & Form Corrections PDF
                                </li>
                                <hr />
                            </ul>
                            <ul className="form-boxes">
                                <u>HIIT</u>
                                <li>
                                    <input type="checkbox" id="HIIT" name="HIIT_Strength" value="HIIT_Strength" /> HIIT 8 Week Program Strength & Power
                                </li>
                                <li>
                                    <input type="checkbox" id="HIIT" name="HIIT_Endurance" value="HIIT_Endurance" /> HIIT 8 Week Program Endurance
                                </li>
                                <li>
                                    <input type="checkbox" id="HIIT" name="HIIT_Conditioning" value="HIIT_Conditioning" /> HIIT 8 Week Program Base Fitness & Conditioning
                                </li>
                                <li>
                                    <input type="checkbox" id="HIIT" name="HIIT_Videos" value="HIIT_Videos" /> HIIT Videos
                                </li>
                                <li>
                                    <input type="checkbox" id="HIIT" name="HIIT_PDF" value="HIIT_PDF" /> HIIT & Strength PDF
                                </li>
                                <hr />
                            </ul>
                            <ul className="form-boxes">
                                <u>Online Training</u>
                                <li>
                                    <input type="checkbox" id="onlinetraining" name="Online_Training" value="Online-Training" /> Online Tailored Personal Training
                                </li>
                                <hr />
                            </ul>
                            <ul className="form-boxes">
                                <u>Running</u>
                                <li>
                                    <input type="checkbox" id="running" name="Running_FiveK" value="Running_FiveK" /> 5k Training Program
                                </li>
                                <li>
                                    <input type="checkbox" id="running" name="Running_HalfMarathon" value="Running_HalfMarathon" /> Half Marathon Training Program
                                </li>
                                <li>
                                    <input type="checkbox" id="running" name="Running_Marathon" value="Running_Marathon" /> Marathon Training Program
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <label for="message">Your message:</label>
                            <textarea rows="4" onBlur={validateMessage} id="message" defaultValue={message} name="user_message" placeholder='write message' />
                        </div>
                        <div className="error">
                            <p>{errorMessage}</p>
                        </div>
                        <div className="row">
                            <button onClick={sendEmail} id="formbtn" type="submit" value="Send" >Submit</button>
                        </div>
                    </form>
                </section>
            </article >
        </section >
    );
};