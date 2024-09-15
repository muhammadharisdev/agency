import React from 'react';
import './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaRegArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
  const Links = [
    { label: 'Home', icon: FaRegArrowAltCircleRight, Link: '#home' },
    { label: 'About Me', icon: FaRegArrowAltCircleRight, Link: '#about' },
    { label: 'Services', icon: FaRegArrowAltCircleRight, Link: '#service' },
    { label: 'Projects', icon: FaRegArrowAltCircleRight, Link: '#project' },
    { label: 'Contact', icon: FaRegArrowAltCircleRight, Link: 'contact' },
  ];

  const contactInfo = [
    { icon: 'fa-map-marker-alt', text: 'Karachi, Sindh Pakistan' },
    { icon: 'fa-phone-alt', text: '+92 000 00000' },
    { icon: 'fa-envelope', text: 'info@example.com' },
  ];


  const time = [
    { day: 'Monday - Saturday', time: '09AM - 09PM' },
    { day: 'Sunday', time: '10AM - 08PM' },
  ];

  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-white footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-white fw-normal mb-4">
                Company
              </h4>
              {Links.map((link, index) => (
                <a
                  key={index}
                  className="btn d-flex text-white align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: 'me-2' })}
                  {link.label}
                </a>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-white fw-normal mb-4">
                Contact
              </h4>
              {contactInfo.map((info, index) => (
                <p key={index} className="mb-2">
                  <i className={`fa ${info.icon} me-3`} />
                  {info.text}
                </p>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-white fw-normal mb-4">
                Opening
              </h4>
              {time.map((hours, index) => (
                <React.Fragment key={index}>
                  <h5 className="text-light fw-normal">{hours.day}</h5>
                  <p>{hours.time}</p>
                </React.Fragment>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-white fw-normal mb-4">
                Newsletter
              </h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-white w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid bg-white text-white pt-3 py-3">
        <div className="copyright">
          <div className="row">
            <div className=" text-center text-dark text-md-center ">   
          <p>&copy;2024 MAG-TECH. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;