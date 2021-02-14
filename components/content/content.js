import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Footer from "../footer/footer";
import "./content.scss";

const Content = withNavigationContext(({ fullpage, main, action }) => {
  return (
    <div className="content">
      <div className="content__main">{main}</div>
      <div className="content__action">
        <div className="content__action__go">{action}</div>
      </div>
      <Footer fullpage={fullpage} />
    </div>
  );
});

export default Content;
