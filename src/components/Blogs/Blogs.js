import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Blogs = () => {

    useEffect(() => {
        AOS.init(({ duration: 2000 }));
    }, [])

    return (
        <>
            <Header></Header>
            <div className="global-bg  text-white text-uppercase py-5" >
                <h1 data-aos="fade-right">Stay Connected</h1>
                <h3 data-aos="fade-left">Blog Post Comming Soon!!!</h3>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;