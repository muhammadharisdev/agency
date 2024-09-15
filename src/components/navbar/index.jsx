import style from './style.module.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InquiryForm from '../form';
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <>

   <nav className={style.Navbar}>
        <div className={style.container}>
            <div className={style.logo}>MagTech</div>
            <div className={style.lists}>
                <a href="#home" className={style.links}>Home</a>
                <a href="#about" className={style.links}>About Me</a>
                <a href="#service" className={style.links}>Services</a>
                <a href="#project" className={style.links}>Projects</a>
                <a href="#contact" className={style.links}>Contact</a>
            </div>
            {/* <button className={style.btn}>Connect Me</button> */}
     <Button variant="primary" className={style.btn} onClick={handleShow}>
Contact Me  </Button>
        </div>
     </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>InquiryForm</Modal.Title>
        </Modal.Header>
        <Modal.Body><InquiryForm /></Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
     <nav className={style.mobileNav}>
        <div className={style.container_mobile}>
            <div className={style.logo_mobile}>MagTech</div>
            <div className={style.lists_mobile}>
                <a href="#home" className={style.links_mobile}>Home</a>
                <a href="#about" className={style.links_mobile}>About Me</a>
                <a href="#service" className={style.links_mobile}>Services</a>
                <a href="#project" className={style.links_mobile}>Projects</a>
                <a href="#contact" className={style.links_mobile}>Contact</a>
            </div>
            <Button variant="primary" className={style.btn} onClick={handleShow}>
            Contact Me  </Button>     
               </div>

    </nav> 
    </>
  )
}

export default Navbar;