import Button from "@restart/ui/esm/Button";
import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  function ValidateEmail(email) {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return true;
    }
    Emailnotify();
    return false;
  }

  function ValidatePhone(phone) {
    if (/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(phone)) {
      return true;
    }
    PhoneNotify();
    return false;
  }

  const Emailnotify = () =>
    toast.error("You have entered an invalid email address", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const FillNotify = () =>
    toast.error("Please, fill all the box", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const PhoneNotify = () =>
    toast.error("You have entered an invalid Phone Number address", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const notify = () =>
    toast.success("Message Send Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.name.value !== "" &&
      form.current.email.value !== "" &&
      form.current.phone.value !== "" &&
      form.current.subject.value !== "" &&
      form.current.message.value !== ""
    ) {
      if (
        ValidateEmail(form.current.email.value) &&
        ValidatePhone(form.current.phone.value)
      ) {
        emailjs
          .sendForm(
            "service_gsetyex",
            "template_59ndgh8",
            form.current,
            "user_M3LWauPQSbICP17FzuS9h"
          )
          .then(
            (result) => {
              notify();
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    } else {
      FillNotify();
      return;
    }
  };

  return (
    <div
      id="contact"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <form ref={form} onSubmit={sendEmail} className="text-start ">
        <div className="fw-bolder fs-1 text-white text-center">
          LETS DISCUSS
        </div>

        <Row className="pb-3">
          <Col>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="py-3 ps-2 w-100 bg-white rounded"
            />
          </Col>
          <Col>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="py-3 ps-2 w-100 bg-white rounded"
            />
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="py-3 ps-2 w-100 bg-white rounded"
            />
          </Col>
          <Col>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="py-3 ps-2 w-100 bg-white rounded"
            />
          </Col>
        </Row>

        <Row className="pb-3">
          <Col>
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="py-3 ps-2 w-100 bg-white rounded"
            />
          </Col>
        </Row>

        {/* {errors.name && <Alert variant="danger">This field is required </Alert>}
                    <br /> */}

        <Button className=" bg-green w-100 ">
          {" "}
          <input type="submit" className="btn fw-bold w-100" />
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>

    // <div className="">
    //     <form onSubmit={handleSubmit(onSubmit)} className="text-start  " >
    //         <div className="fw-bold text-white fs-1 text-center">Get in Touch</div>

    //         <Row className="pb-3">
    //             <Col>
    //                 <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="py-3 ps-2 w-100 bg-white rounded" />
    //             </Col>
    //             <Col>
    //                 <input {...register("email", { required: true })} type="text" placeholder="Your Email" className="py-3 ps-2 w-100 bg-white rounded" />
    //             </Col>

    //         </Row>
    //         <Row className="pb-3">
    //             <Col>
    //                 <input {...register("phone", { required: true })} type="text" placeholder="Phone Number" className="py-3 ps-2 w-100 bg-white rounded" />
    //             </Col>
    //             <Col>
    //                 <input {...register("subject", { required: true })} type="text" placeholder="Subject" className="py-3 ps-2 w-100 bg-white rounded" />
    //             </Col>

    //         </Row>

    //         <Row className="pb-3">
    //             <Col>

    //                 <input {...register("message", { required: true })} type="text" placeholder="Your Message" className="pt-2 pb-5 ps-2 w-100 bg-white rounded" />

    //             </Col>
    //         </Row>

    //         {/* {errors.name && <Alert variant="danger">This field is required </Alert>}
    //             <br /> */}

    //         <Button className=" bg-green w-100 ">  <input type="submit" className="btn fw-bold" /></Button>

    //     </form>
    // </div>
  );
};

export default Contact;
