import React, { useState, useCallback, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import SelectBox from "../components/Selectbox";
import { fetchApi } from "../config/services";

const carSize = {
  small: "2 - 4 Orang",
  medium: "4 - 6 Orang",
  large: "6 - 8 Orang",
};

const DetailMobil = (props) => {
  const [data, setData] = useState(null);
  const [loader, setloader] = useState("idle");
  const { id } = useParams();
  const fetchingMobil = useCallback(
    (params = null) => {
      setloader("fetching");
      fetchApi(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`,
        params
      )
        .then((result) => {
          setData(result.data);
          setloader("resolve");
        })
        .catch((e) => {
          setloader("reject");
        });
    },
    [id]
  );

  useEffect(() => {
    fetchingMobil();
  }, [fetchingMobil]);

  const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  return (
    <>
      <div style={{ background: "#f1f3ff", height: "180px", width: "1005" }}>
        <div
          className="contains-box m-0 position-relative"
          style={{ top: "7rem" }}
        >
          <div className="list-form d-flex gap-3 justify-content-evenly">
            <Input
              disabled={true}
              placeholder="Masukan Nama/Tipe Mobil"
              className="form-control"
              name="carName"
              label={"Nama Mobil"}
            />
            <SelectBox
              disabled={true}
              name="kapasitas"
              title="Masukan Kapasitas Mobil"
              label="Kategori"
            />
            <SelectBox
              disabled={true}
              name="harga"
              title="Masukan Harga Sewa"
              label="Harga Sewa"
            />
            <SelectBox
              disabled={true}
              name="status"
              title="Masukan Status Mobil"
              label="Status"
            />
          </div>
        </div>
      </div>
      {/* {console.log("LOADER PROGRESS : ", loader)} */}
      {loader !== "resolve" && (
        <div className="contains-box contains-car text-center">
          <Spinner size="md" color="success">
            {" "}
          </Spinner>
        </div>
      )}
      {loader === "resolve" && (
        <div className="contains-box contains-car">
          <Row>
            <Col md={7}>
              <div className="card p-4">
                <div className="title pb-4">
                  <h6 className="title-detail">Tentang Paket</h6>
                </div>
                <div className="body">
                  <h6 className="title-detail">Includes</h6>
                  <ul className="list-detail">
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12
                      jam.
                    </li>
                    <li> Sudah termasuk bensin selama 12 jam.</li>
                    <li>Sudah termasuk Tiket Wisata.</li>
                    <li>Sudah termasuk pajak.</li>
                  </ul>
                </div>
                <div className="body">
                  <h6 className="title-detail">Exclude</h6>
                  <ul className="list-detail">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam .
                    </li>
                    <li>Tidak termasuk akomodasi penginapan.</li>
                  </ul>
                </div>
                <div className="body">
                  <h6 className="title-detail">Refund, Reschedule, Overtime</h6>
                  <ul className="list-detail">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam.
                    </li>
                    <li>Tidak termasuk akomodasi penginapan.</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam.
                    </li>
                    <li> Tidak termasuk akomodasi penginapan.</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam.
                    </li>
                    <li>Tidak termasuk akomodasi penginapan.</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="card card-size d-flex flex-column p-4">
                <img
                  className="img-max-contain"
                  src={data?.image}
                  alt="pict-car"
                />
                <div className="py-4">
                  <div
                    className="py-1"
                    style={{ fontSize: "14px", fontWeight: 700 }}
                  >
                    {data?.name}
                  </div>
                  <div
                    className="py-1"
                    style={{ fontSize: "10px", color: "#8A8A8A" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="user-car-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    {carSize[data?.category]}
                  </div>
                  <div className="d-flex justify-content-between py-1 mt-5">
                    <div style={{ fontSize: "14px", fontWeight: 700 }}>
                      Total
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700 }}>
                      {formatNumber(data?.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default DetailMobil;
