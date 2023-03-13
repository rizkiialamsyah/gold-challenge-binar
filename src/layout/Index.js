import React from "react";
import PublicRoutes from "../config/router";
import Footer from "./Footer";
import Header from "./Header";

const HalamanUtama = (props) => {
  return (
    <>
      <Header />
      <PublicRoutes />
      <Footer />
    </>
  );
};

export default HalamanUtama;
