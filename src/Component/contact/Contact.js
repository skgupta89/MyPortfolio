import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import './contact.css'
function Contact(props) {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'SERVICE ID',
      // 'TEMPLATE ID',
      toSend,
      'User ID'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Response Submited .Thank you!')
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container contact" id={props.id}>
        <div className="title">
          <h1>Contact <span className="me"> Me </span></h1>
        </div>
        <div className="row">
          <div className="col-lg-5 colone">
            <div class="mb-3">

              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  // value={toSend.name}
    onChange={handleChange}
                />
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  // value={toSend.email}
    onChange={handleChange}
                />
                <input
                  type="Subject"
                  class="form-control"
                  id="Subject"
                  placeholder="Subject"
                  // value={toSend.subject}
    onChange={handleChange}
                />
                <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1"
    rows="3" 
    placeholder="Message"
    // value={toSend.message}
    onChange={handleChange}
    ></textarea>
</div>
<button className="btn btn-primary" > Send Message </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
