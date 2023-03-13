import Testimonials from "../components/Testimonials";
import Accordionfaq from "../components/faq";
import Arrowico from "../assets/image/arrow-list.png";
import Serviceimg from "../assets/image/img_service.png";
import iconcomplete from "../assets/image/icon_complete.png";
import iconjam from "../assets/image/icon_24hrs.png";
import iconharga from "../assets/image/icon_price.png";
import iconpro from "../assets/image/icon_professional.png";

const Homepage = (props) => {
  return (
    <>
      {/*------------------------------------------- Start Section Hero-------------------------------------- */}

      {/*------------------------------------------- Akhir Section Hero-------------------------------------- */}
      {/*------------------------------------------- Start Section Fitur-------------------------------------- */}
      <section id="services" className="feature-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                src={Serviceimg}
                alt="servicepp"
                width="450"
                className="img-service"
              />
            </div>
            <div className="col pt-5">
              <h2 className="list-title">
                Best Car Rental for any kind of trip in Majalengka!
              </h2>
              <p className="list-description">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex flex-row gap-3 p-2">
                  <img src={Arrowico} alt="arrow-icon" width="24" />
                  <span className="list-text">
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </span>
                </div>
                <div className="d-flex flex-row gap-3 p-2">
                  <img src={Arrowico} alt="arrow-icon" width="24" />
                  <span className="list-text">
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </span>
                </div>
                <div className="d-flex flex-row gap-3 p-2">
                  <img src={Arrowico} alt="arrow-icon" width="24" />
                  <span className="list-text">
                    Sewa Mobil Jangka Panjang Bulanan
                  </span>
                </div>
                <div className="d-flex flex-row gap-3 p-2">
                  <img src={Arrowico} alt="arrow-icon" width="24" />
                  <span className="list-text">
                    Gratis Antar - Jemput Mobil di Bandara
                  </span>
                </div>
                <div className="d-flex flex-row gap-3 p-2">
                  <img src={Arrowico} alt="arrow-icon" width="24" />
                  <span className="list-text">
                    Layanan Airport Transfer / Drop In Out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*------------------------------------------- Akhir Section Fitur-------------------------------------- */}
      {/* ------------------------------------------Start Section Why Us Card -------------------------------------------------------- */}
      <section id="whyus" className="container why-us-section">
        <div className="why-center mb-5">
          <h2 className="why-title">Why us?</h2>
          <h3 className="why-description">
            Mengapa harus pilih Binar Car Rental?
          </h3>
        </div>
        <div className="row ms-auto g-2">
          <div className="col-sm mb-3">
            <div className="card card-style">
              <div className="card-body">
                <img src={iconcomplete} alt="complete-icon" />
                <h5 className="card-title mt-3">Mobil Lengkap</h5>
                <p className="card-text mt-3">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm mb-3">
            <div className="card card-style">
              <div className="card-body">
                <img src={iconharga} alt="price-icon" />
                <h5 className="card-title mt-3">Harga Murah</h5>
                <p className="card-text mt-3">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm mb-3">
            <div className="card card-style">
              <div className="card-body">
                <img src={iconjam} alt="24-hours-icon" />
                <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                <p className="card-text mt-3">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. kami juga
                  tersedia di akhir minggu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm mb-3">
            <div className="card card-style">
              <div className="card-body">
                <img src={iconpro} alt="profesional-icon" />
                <h5 className="card-title mt-3">Sopir Profesional</h5>
                <p className="card-text mt-3">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------Akhir Section Why Us Card -------------------------------------------------------- */}
      {/*
       Testimonial component Start */}
      <section id="testimonial">
        <Testimonials />
      </section>

      {/* Testimonial component End */}
      {/*-------------------------------------------- CTA & FAQ Section Start ---------------------------------------------------------------------- */}
      <section id="faq" className="cta-section container text-center ctaspc">
        <div className="row align-items-center">
          <div className="col-2"></div>
          <div className="col">
            <h2 className="cta-title pb-2">
              Sewa Mobil di Majalengka Sekarang
            </h2>
            <p className="cta-text pb-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-success">Mulai Sewa Mobil</button>
          </div>
          <div className="col-2"></div>
        </div>
      </section>

      <section className="container faq-section">
        <div className="row align-items-start">
          <div className="col-md">
            <h2 className="faq-title">Frequently Asked Question</h2>
            <h3 className="faq-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
          </div>
          <div className="col-md">
            <Accordionfaq />
          </div>
        </div>
      </section>
      {/*-------------------------------------------- CTA & FAQ Section END ---------------------------------------------------------------------- */}
    </>
  );
};
export default Homepage;
