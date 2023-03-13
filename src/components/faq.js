import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccordionComp from "../components/AccordionComp";

const FiturFAQ = () => {
  return (
    <Container>
      <Row className="px-sm-0 p-3 flex-sm-column gap-sm-4 gap-lg-0 gap-4 flex-lg-row">
        <Col>
          <AccordionComp
            text="Apa saja syarat yang dibutuhkan?"
            deskripsi="Kartu Identitas dan SIM"
          />
          <AccordionComp
            text="Berapa hari minimal sewa mobil lepas kunci?"
            deskripsi="Minimal 1 Hari"
          />
          <AccordionComp
            text="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
            deskripsi="Minimal 7 Hari"
          />
          <AccordionComp
            text="Apakah Ada biaya antar-jemput?"
            deskripsi="Tidak ada biaya antar-jemput"
          />
          <AccordionComp
            text="Bagaimana jika terjadi kecelakaan"
            deskripsi="Tersedia pilihan untuk asuransi"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FiturFAQ;
