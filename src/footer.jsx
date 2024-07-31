import "./Styling/footer.css";
import me from "./pictures/me.jpg";
import { useState } from "react";

function Footer () {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const thanks = document.getElementById('thanks');
    //     thanks.style.display = 'grid';
    // };
      

    return (
        <div className="footer">

            <div className="footer-section-one">
            <div className="my-info">

                <div className="my-img">
                    <img src={me} alt="" />
                </div>

                <div className="my-info-paragraph">
                    <p>Thank you for visiting this website! It's one of the projects in my portfolio, showcasing my skills and passion for web development. If you're interested in collaborating, have any questions, or would like to hire me for a project, please don't hesitate to reach out.</p>
                    <h3>Get in Touch</h3>
                    <p>Feel free to fill out the form with your details and message. I'll get back to you as soon as possible.</p>
                </div>

            </div>


            <div className="footer-form">
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="fc66f159-f1aa-43a4-9016-8de613bed4f0" />

                <div className="contact-me">
                    <h2>CONTACT ME</h2>
                </div>

                <div className="footer-inputs">
                    <input className="footer-msg" name="name" type="text" placeholder="FULL NAME" required />
                    <input className="footer-msg" name="email" type="text" placeholder="E-MAIL" required />
                    <textarea className="footer-msg message" name="message" type="text" placeholder="MESSAGE" required />

                    <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}></input>

                    <input type="hidden" name="redirect" value="https://ahmadsaeedmirza.github.io/thank-you/"></input> 
                </div>

                <button className="footer-btn">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>

            </form>
            </div>
            </div>        

            <div className="footer-line"></div>

            <div className="footer-links">
                <div className="footer-icon linkedIn">
                    <i className="fa-brands fa-linkedin-in fa-2xl"></i>
                </div>
                
                <div className="footer-icon mail">
                    <i className="fa-regular fa-envelope fa-2xl"></i>
                </div>

                <div className="footer-icon twitter">
                    <i className="fa-brands fa-x-twitter fa-2xl"></i>
                </div>

                <div className="footer-icon instagram">
                    <i className="fa-brands fa-instagram fa-2xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;