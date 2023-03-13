import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Form from "../components/Form";
import Input from "../components/Input";
import SelectBox from "../components/Selectbox";
import { fetchApi } from "../config/services";
import HasilCari from "./hasil-cari";

const categoryData = [
  {
    value: "small",
    label: "2 - 4 Orang",
  },
  {
    value: "medium",
    label: "4 - 6 Orang",
  },
  {
    value: "large",
    label: "6 - 8 Orang",
  },
];

const priceData = [
  {
    value: 400000,
    label: "< Rp.400.000",
  },
  {
    value: 600000,
    label: " Rp. 400.000 - Rp. 600.000",
  },
  {
    value: 400000,
    label: "> Rp.400.000",
  },
];

const statusData = [
  {
    value: true,
    label: "Disewa",
  },
  {
    value: false,
    label: "Tidak Disewa",
  },
];
const Carimobil = (props) => {
  const [value, setValue] = useState({
    carName: "",
    kapasitas: "",
    harga: "",
    status: "",
  });

  const [data, setData] = useState([]);
  const [backDrop, setBackDrop] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  document.addEventListener("click", (e) => {
    if (e.target.id === "back-drop") {
      setBackDrop(false);
    }
  });
  const FetchMobil = useCallback((params = null) => {
    fetchApi(
      "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
      params
    ).then((result) => {
      setData(result.data.cars);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    FetchMobil({
      name: value.carName,
      category: value.kapasitas,
      isRented: value.status,
      minPrice: value.harga,
      maxPrice: value.harga,
    });
    setBackDrop(false);
  };

  useEffect(() => {
    FetchMobil();
  }, [FetchMobil]);

  const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  const navigate = useNavigate();

  return (
    <>
      <section
        className="contains-box position-absolute w-100"
        style={{ marginTop: "-3rem" }}
      >
        {backDrop && <div id="back-drop" className="backdrop"></div>}
        <Form onSubmit={handleSubmit}>
          <div className="list-form d-flex gap-2 justify-content-evenly">
            <Input
              onFocus={() => {
                setBackDrop(true);
              }}
              onChange={handleChange}
              placeholder="Masukan Nama/Tipe Mobil"
              className="form-control"
              name="carName"
              label={"Nama Mobil"}
            />
            <SelectBox
              onFocus={() => {
                setBackDrop(true);
              }}
              onChange={handleChange}
              name="kapasitas"
              title="Masukan Kapasitas Mobil"
              label="Kategori"
              data={categoryData}
            />
            <SelectBox
              onFocus={() => {
                setBackDrop(true);
              }}
              onChange={handleChange}
              name="harga"
              title="Masukan Harga Sewa"
              label="Harga Sewa"
              data={priceData}
            />
            <SelectBox
              onFocus={() => {
                setBackDrop(true);
              }}
              onChange={handleChange}
              name="status"
              title="Masukan Status Mobil"
              label="Status"
              data={statusData}
            />
            <div
              className="d-flex align-items-center position-relative"
              style={{ top: "6px" }}
            >
              <button onClick="Edit" className="btn btn-success">
                Cari Mobil
              </button>
            </div>
          </div>
        </Form>
      </section>
      <section className="contains-box contains-car">
        <Row>
          {data.map((item, index) => {
            return (
              <Col key={index} md={4} className="pb-3">
                <div className="card card-size d-flex flex-column gap-4">
                  <div className="card-image-size">
                    <img
                      className="car-size-list"
                      src={item.image}
                      alt="car-list"
                    />
                  </div>
                  <div className="card-content px-4 pb-4">
                    <h6>{item.name}</h6>
                    <p className="card-car-desc">
                      {formatNumber(item.price)} /Hari
                    </p>
                    <p className="card-car-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button
                      onClick={() => navigate(`/cari-mobil/ ${item.id}`)}
                      className="btn btn-success w-100"
                    >
                      Detail Mobil
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};

export default Carimobil;
