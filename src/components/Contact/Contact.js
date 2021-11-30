import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';




const Contact = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (

        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="text-start  " >
                <div className="fw-bold text-white fs-1 text-center">Get in Touch</div>

                <Row className="pb-3">
                    <Col>
                        <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="py-3 ps-2 w-100 bg-white rounded" />
                    </Col>
                    <Col>
                        <input {...register("email", { required: true })} type="text" placeholder="Your Email" className="py-3 ps-2 w-100 bg-white rounded" />
                    </Col>

                </Row>
                <Row className="pb-3">
                    <Col>
                        <input {...register("phone", { required: true })} type="text" placeholder="Phone Number" className="py-3 ps-2 w-100 bg-white rounded" />
                    </Col>
                    <Col>
                        <input {...register("subject", { required: true })} type="text" placeholder="Subject" className="py-3 ps-2 w-100 bg-white rounded" />
                    </Col>

                </Row>

                <Row className="pb-3">
                    <Col>

                        <input {...register("message", { required: true })} type="text" placeholder="Your Message" className="pt-2 pb-5 ps-2 w-100 bg-white rounded" />

                    </Col>
                </Row>

                {/* {errors.name && <Alert variant="danger">This field is required </Alert>}
                    <br /> */}


                <Button className=" bg-green w-100 ">  <input type="submit" className="btn fw-bold" /></Button>

            </form>
        </div>

    );
};

export default Contact;