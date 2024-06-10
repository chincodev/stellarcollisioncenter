import React, { useState } from "react"
import Head from "next/head";
import axios from 'axios'
import { Bounce, ToastContainer, toast } from "react-toastify";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  text: ""
};

function Map(props) {
  const [contact, setContact] = useState(INITIAL_STATE);

  const [ sending, setSending ] = useState(false)
  const [ error, setError ] = useState(false)

  const handleChange = e => {
      const { name, value } = e.target;
      setContact(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async e => {
      e.preventDefault();
      try {
          setSending(true);
          
          const url = `${window.location.origin}/api/contact`;
          const { name, email, subject, text } = contact;
          const payload = { name, email, subject, text };
          await axios.post(url, payload);
          toast("Your message was successfully sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        
          });
          setContact(INITIAL_STATE);
          setSending(false);
          setError(false)
      } catch (error) {
          setError(true)
          setSending(false);
          toast.error("There was an issue sending your message... Try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        
          });
      }
  };


  return (
      <>
        <div className={props.fullWidth ? '' : 'container'}>
          <div className="location-map">
            <iframe
              src={props.google_maps_url ? props.google_maps_url : props.global.settings.google_maps_url}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </>
  );
}

export default Map;