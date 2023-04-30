import React, {useCallback, useEffect, useState} from "react";
import ContactUsImage from "../../public/images/contact form/ContactForm.png";
import Icon1 from "../../public/images/contact form/team.png";
import Icon2 from "../../public/images/contact form/mobile-game.png";
import Icon3 from "../../public/images/contact form/bar-graph.png";
import Icon4 from "../../public/images/contact form/handshake.png";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const formAction = 'contactForm';
console.log("formAction: ", formAction)

const ContactForm = ({ compact }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [reCaptchaToken, setReCaptchaToken] = useState();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    setReCaptchaToken(await executeRecaptcha(formAction));
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  function sd() {
    return undefined;
  }
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPhone, setInputPhone] = useState();
  const [inputMessage, setInputMessage] = useState();
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [reCaptachFailed, setReCaptachFailed] = useState(false);

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!inputName || inputName=="" || !inputMessage || inputMessage=="" || !inputEmail || inputEmail=="") {
      setMessageFailed(true);
      return;
    }
    setReCaptachFailed(false);
    setMessageFailed(false);
    (async () => {
      console.log("Submitting form...", inputName);
      let token = reCaptchaToken;
      if (!token) {
        console.log("formAction is: ", formAction);
        token = await executeRecaptcha(formAction);
        if (!token){
          setReCaptachFailed(true);
          return;
        }
      }
      console.log("t: ", token)
      // Default options are marked with *
      let data = new FormData();
      data.append("name", (inputName) ? inputName : "");
      data.append("email", (inputEmail) ? inputEmail : "");
      data.append("phone", (inputPhone) ? inputPhone : "");
      data.append("message", (inputMessage) ? inputMessage : "");
      data.append("action", formAction);
      data.append("token", token);
      let url = "https://bleedingedge.studio/ajax.php";
      const response = fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          // 'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data // body data type must match "Content-Type" header
      }).then((response) => {
        console.log("response: ", response)
        if (response.status==200) {
          setMessageSent(true);
          setMessageFailed(false);
        }else {
          setReCaptchaToken("");
          setMessageFailed(true);
        }
        return response.json();
      }).then((data) => {
        console.log("Res: ", data);
        if (data.hasOwnProperty('reCaptcha') && data.reCaptcha==false){
          setMessageFailed(false);
          setReCaptachFailed(true);
          setReCaptchaToken("");
        }
      }).catch(function(err) {
        console.log("Error: ", err)
        setReCaptchaToken("");
        setMessageFailed(true);
      });
    })();
  }

  return (
    <section className="container pt-5">
      <div className="row">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h1 className="display-4 fw-normal mb-4">Lets Talk</h1>
          <p className="fs-5 mb-5">
            We have worked with clients ranging from young startups to mature Fortune companies who are very impressed
            with our service offerings. Brief us of your requirements, and we’ll get started on it right away.
          </p>
          {messageFailed && <div className="alert alert-danger" role="alert">Please fill in all required fields.</div> }
          {reCaptachFailed && <div className="alert alert-danger" role="alert">We are unable to verify whether you are human. Please reload and try again.</div> }
          {!messageSent &&
          <form onSubmit={e => {
            handleSubmitForm(e)
          }}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <input
                    className="form-control bg-transparent text-light rounded-0 border-0 border-bottom mb-3"
                    type="text"
                    name="name"
                    onChange={e => setInputName(e.target.value)}
                    placeholder="Your Name"
                />
                <input
                    className="form-control bg-transparent text-light rounded-0 border-0 border-bottom mb-3"
                    type="email"
                    name="email"
                    onChange={e => setInputEmail(e.target.value)}
                    placeholder="Your Email"
                />
                <input
                    className="form-control bg-transparent text-light rounded-0 border-0 border-bottom mb-3"
                    type="text"
                    name="phone"
                    onChange={e => setInputPhone(e.target.value)}
                    placeholder="Your Phone Numbers"
                />
              </div>
              <div className="col-12 col-lg-6">
                <textarea
                    className="form-control bg-transparent text-light rounded-0 border-0 border-bottom mb-3"
                    type="text"
                    name="message"
                    placeholder="Tell us about your project"
                    onChange={e => setInputMessage(e.target.value)}
                    rows={3}
                ></textarea>
                <input className="btn btn-primary px-5 text-white mt-4" type="submit" value="SEND"/>
              </div>
            </div>
          </form>
          }
          {messageSent && <div className="alert alert-success gradient-border p-3 text-white" role="alert">Your message has been sent successfully.</div> }
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <div className="d-flex justify-content-center justify-content-lg-end align-items-center h-100 mb-4">
            <img src={ContactUsImage.src} className="img-fluid w-75" />
          </div>
        </div>
      </div>

      {compact || (
        <div className="d-flex flex-wrap gap-4 mt-5">
          <div className="flex-fill rounded-3 gradient-border">
            <div className="d-flex rounded-3">
              <div className="gradient p-3  rounded-start">
                <img src={Icon1.src} />
              </div>
              <div className="p-3">
                <h5>200+</h5>
                <p className="m-0">Team Members</p>
              </div>
            </div>
          </div>
          <div className="flex-fill rounded-3 gradient-border">
            <div className="d-flex rounded-3">
              <div className="gradient p-3  rounded-start">
                <img src={Icon2.src} />
              </div>
              <div className="p-3">
                <h5>250+</h5>
                <p className="m-0">Apps & Games</p>
              </div>
            </div>
          </div>
          <div className="flex-fill rounded-3 gradient-border">
            <div className="d-flex rounded-3">
              <div className="gradient p-3  rounded-start">
                <img src={Icon3.src} />
              </div>
              <div className="p-3">
                <h5>178 %</h5>
                <p className="m-0">Growth Rate</p>
              </div>
            </div>
          </div>
          <div className="flex-fill rounded-3 gradient-border">
            <div className="d-flex rounded-3">
              <div className="gradient p-3  rounded-start">
                <img src={Icon4.src} />
              </div>
              <div className="p-3">
                <h5>81 %</h5>
                <p className="m-0">Repeat Clients</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
