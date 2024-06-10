import React, { useState } from "react"
// import axios from 'axios'
import { toast } from "react-toastify";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  text: ""
};

function Contact(props) {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [ sending, setSending ] = useState(false)
  const [ error, setError ] = useState(false)

  const handleChange = e => {
      const { name, value } = e.target;
      setContact(prevState => ({ ...prevState, [name]: value }));
  }

  // const handleSubmit = async e => {
  //     e.preventDefault();
  //     try {
  //         setSending(true);
          
  //         const url = `${window.location.origin}/api/contact`;
  //         const { name, email, subject, text } = contact;
  //         const payload = { name, email, subject, text };
  //         await axios.post(url, payload);
  //         toast("Your message was successfully sent!", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "dark",
        
  //         });
  //         setContact(INITIAL_STATE);
  //         setSending(false);
  //         setError(false)
  //     } catch (error) {
  //         setError(true)
  //         setSending(false);
  //         toast.error("There was an issue sending your message... Try again later.", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "dark",
        
  //         });
  //     }
  // };


  return (

      <>
        <div>
          <div className="contact-pages pt-120 mb-120">
            <div className="container">
              <div className="row align-items-center g-lg-4 gy-5">
                <div className="col-lg-5">
                  <div className="contact-left">
                    <div className="hotline mb-80">
                      <h3>{props.phoneSectionTitle}</h3>
                      <div className="icon">
                        <img src="assets/images/icon/phone-icon4.svg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <a href={`tel:${props.global.settings.phone}`}>{props.global.settings.phone}</a>
                        </h6>
                      </div>
                    </div>
                    <div className="location">
                      <h3>{props.phoneSectionTitle}</h3>
                      <div className="icon">
                        <img src="assets/images/icon/location4.svg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <a href="#">
                            {props.global.settings.address}
                            <br />
                            {props.global.settings.address_line_2}
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-form">
                    <h2>{props.form_title}</h2>
                    <form 
                    // onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-12 mb-40">
                          <div className="form-inner">
                            <input 
                              type="text" 
                              name='name'
                              placeholder={props.namePlaceholder}
                              value={contact.name}
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                          <div className="form-inner">
                            <input 
                              type="email" 
                              placeholder={props.emailPlaceholder}
                              name="email" 
                              value={contact.email}
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                          <div className="form-inner">
                            <input 
                              type="text" 
                              placeholder={props.SubjectPlaceholder} 
                              name="subject" 
                              value={contact.subject}
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-40">
                          <div className="form-inner">
                            <textarea
                              placeholder="Your message"
                              name="text" 
                 
                              value={contact.text}
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-inner">
                            <button disabled={sending || error} className="primary-btn1">
                              {props.buttonLabel} <i className="bi bi-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Contact;
