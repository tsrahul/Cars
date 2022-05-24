import "./loader.css";
import React, { Suspense } from "react";

import { LoadingOutlined } from "@ant-design/icons";

const Loader = () => {
  return (
    <section className="section-padding">
      <LoadingOutlined />
      <p className="fnt-md fnt-msrt fnt-600 text-capitalize text-blue">
        loading
      </p>
    </section>
  );
};

export default Loader;
