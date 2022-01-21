import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <MaxWidthWrapper as="main">{props.children}</MaxWidthWrapper>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
