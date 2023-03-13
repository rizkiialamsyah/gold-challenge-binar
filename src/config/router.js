import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import Carimobil from "../pages/cari-mobil.js";
import DetailMobil from "../pages/detail-mobil";
import HasilCari from "../pages/hasil-cari";

const routing = (props) => {
  return [
    { index: true, path: "/", element: <Home {...props} title="Home" /> },
    {
      index: true,
      path: "/cari-mobil",
      element: <Carimobil {...props} title="Cari Mobil" />,
    },
    {
      index: true,
      path: "/hasil-cari-mobil",
      element: <HasilCari {...props} title="Hasil Cari Mobil" />,
    },
    {
      index: true,
      path: "/cari-mobil/:id",
      element: <DetailMobil {...props} title="Detail Mobil" />,
    },
  ];
};
const PublicRoutes = (props) => {
  const routes = useRoutes(routing(props));
  return routes;
};

export default PublicRoutes;
