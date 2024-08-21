import React, { useState } from "react";

const Contact = () => {
  const [data , setData] = useState({
    fullname : "",
    phone : "",
    email : "",
    msg : "",
  });

  const InputEvent = (event) => {
    const {name , value} = event.target;
    setData((preval) => {
      return {
        ...preval ,
        [name] : value ,
      };
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}. My massage is ${data.msg}`);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" required />
                </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Number" required/>
                </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="mygmail@gmail.com" required/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">Massage</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} required></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">
                      Submit Form
                    </button>
                  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
