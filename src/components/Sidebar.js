import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Burgermenu from "../assets/image/fi_menu.png";

function Sidebar({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        <img src={Burgermenu} alt="mobile-menu" />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        responsive="lg"
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-lg-none">
            <a
              className="nav-link active mb-2"
              aria-current="page"
              href="#home"
            >
              Our Services
            </a>
            <a className="nav-link active mb-2" href="whyus">
              Why Us
            </a>
            <a className="nav-link active mb-2" href="#testimoni">
              Testimonial
            </a>
            <a className="nav-link active mb-2" href="#faq">
              FAQ
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
