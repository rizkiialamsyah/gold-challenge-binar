import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionComp = ({ text, deskripsi }) => {
  return (
    <Accordion className="mb-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="mb-0 fw-bold">{text}</p>
        </Accordion.Header>
        <Accordion.Body>{deskripsi}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComp;
