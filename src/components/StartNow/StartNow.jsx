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
        <section className="whatismj">
            <h2 id="signup-title">Sign-Up Form</h2>
            <h5 id="signup-title">Thank you for your interest!<br />We are still in the process of setting up direct purchase, if interested please fill out the form below and we will contact you!</h5>
            <article className="signup">
                <section className="contactforms1">
                    <form className="form2" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <label for="name">Your name:</label>
                            <input type="text" onBlur={validateName} id="name2" defaultValue={name} name="user_name" placeholder='name' required />
                        </div>
                        <div className="row">
                            <label for="email">Your email:</label>
                            <input type="email" onBlur={validatingEmail} id="email" defaultValue={email} name="user_email" placeholder='email' required />
                        </div>
                        <p>I am interested in signing-up and receiving payment information for the included programs:</p>
                        <div className="check">
                            <ul className="form-boxes">
                                <li>
                                    <input type="checkbox" id="full" name="Full_Body_Program" value="Full-Body-Program" /> Full Body Fitness Training Programs
                                </li>
                                <li>
                                <input type="checkbox" id="mobility-flexibility" name="Mobility_Flexibility" value="Mobility-Flexibility" /> Mobility & Flexibility Exercises
                                </li>
                                <li>
                                <input type="checkbox" id="posture" name="Posture" value="Posture" /> Posture & Form Corrections for Basic Movements
                                </li>
                                <li>
                                <input type="checkbox" id="HIIT" name="HIIT" value="HIIT"/> HIIT Fitness Program
                                </li>
                                <li>
                                <input type="checkbox" id="onlinetraining" name="Online_Training" value="Online-Training" /> Online Tailored Personal Training
                                </li>
                                <li>
                                <input type="checkbox" id="running" name="Running" value="Running" /> Running Training Programs
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
            </article>
        </section>
    );
};