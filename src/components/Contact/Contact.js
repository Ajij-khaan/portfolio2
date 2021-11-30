import Button from '@restart/ui/esm/Button';
import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    const form = useRef();

    useEffect(() => {
        AOS.init(({ duration: 2000 }));

    }, [])
    const notify = () => toast.success('Message Send Successfully', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    ;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gsetyex', 'template_59ndgh8', form.current, 'user_M3LWauPQSbICP17FzuS9h')
            .then((result) => {
                console.log(result.text, result);
                notify();
                // if (result.text)
            }, (error) => {
                console.log(error.text);
            });
    };

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     console.log(data);

    //     const emaildata = {
    //         // 'name': `${data.name}`
    //         from_name: 'James'
    //     }

    //     emailjs.sendForm('service_gsetyex', 'template_pdw6cvs', emaildata, 'user_M3LWauPQSbICP17FzuS9h')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //             console.log(emaildata);
    //         });


    // }


    return (

        <div id="contact" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <form ref={form} onSubmit={sendEmail} className="text-start " >
                <div className="fw-bolder fs-1 text-white text-center">LETS DISCUSS</div>

                <Row className="pb-3">
                    <Col>
                        <input type="text" name="name" placeholder="Full Name" className="py-3 ps-2 w-100 bg-white rounded" />

                    </Col>
                    <Col>
                        <input type="email" name="email" placeholder="Your Email" className="py-3 ps-2 w-100 bg-white rounded" />

                    </Col>

                </Row>
                <Row className="pb-3">
                    <Col>
                        <input type="text" name="phone" placeholder="Your Phone" className="py-3 ps-2 w-100 bg-white rounded" />

                    </Col>
                    <Col>
                        <input type="text" name="subject" placeholder="Subject" className="py-3 ps-2 w-100 bg-white rounded" />
                    </Col>
                </Row>

                <Row className="pb-3">
                    <Col>
                        <input type="text" name="message" placeholder="Your Message" className="py-3 ps-2 w-100 bg-white rounded" />

                    </Col>
                </Row>

                {/* {errors.name && <Alert variant="danger">This field is required </Alert>}
                    <br /> */}


                <Button className=" bg-green w-100 ">  <input type="submit" className="btn fw-bold w-100" /></Button>
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