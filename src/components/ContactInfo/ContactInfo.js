import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactInfo = () => {

    useEffect(() => {
        AOS.init(({ duration: 2000 }));

    }, [])

    return (
        <div className="text-start" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 className="fw-bolder text-white">I WOULD LOVE TO HEAR FROM YOU</h1>
            <p className="mt-3 text-white">Feel free to reach out if you want to work with me, or simply have a call.</p>
            <p className="text-white">ajijkhaan28@gmail.com →</p>
            <p className=" text-white">+8801742824576 →</p>
        </div>
    );
};

export default ContactInfo;