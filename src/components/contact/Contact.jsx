import { useState,useRef } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss";
 

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ge0ui1d', 'template_2iyp4u9', form.current, 'user_IuwLcv4a21RcFBevgDZNR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/6685.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="user_name" />
        <input type="text" placeholder="subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea placeholder="Message" name="message" ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
       
    </div>
  );
}