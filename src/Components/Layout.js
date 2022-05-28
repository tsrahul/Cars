import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Global/Header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Cars</title>
      </Helmet>
      <main>
        <Header />
        <div className="section_padding">{children}</div>
      </main>
    </>
  );
};

export default Layout;
