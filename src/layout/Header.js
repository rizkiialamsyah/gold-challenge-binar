import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Carimg from "../assets/image/img_car.png";
import { useLocation } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/");
  };
  const params = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg">
        <div className="container">
          <a className="navbar-brand text-primary" onClick={logoClick} href="/">
            Sewa Mobil
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active mx-3"
                aria-current="page"
                href="#services"
              >
                Our Services
              </a>
              <a className="nav-link mx-3" href="#whyus">
                Why Us
              </a>
              <a className="nav-link mx-3" href="#testimonial">
                Testimonial
              </a>
              <a className="nav-link mx-3" href="#faq">
                FAQ
              </a>
            </div>
          </div>
          <Sidebar placement="end" />
        </div>
      </nav>
      {!params.pathname.split("/").filter((i) => i !== "")[1] && (
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="tagline-heading">
                  Sewa & Rental Mobil Terbaik di kawasan Majalengka
                </h1>
                <p className="tagline-desc">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => navigate("/cari-mobil")}
                >
                  Mulai Sewa Mobil
                </button>
              </div>

              <div className="col-md-6">
                <img src={Carimg} alt="mycar" width={704} className="car-img" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Header;
