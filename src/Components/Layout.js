import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Cars</title>
      </Helmet>
      <main>
        <div className="section_padding">{children}</div>
      </main>
    </>
  );
};

export default Layout;
