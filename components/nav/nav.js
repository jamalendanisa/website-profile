import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <img className="logo" src="/static/chara/umishio-logo.png"/>
          <div>
            <h1>
              <span>Umi&Shio Ch.</span>
            </h1>
            <h2>Twins in One Body Virtual Youtuber from Indonesia</h2>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            Umi&Shio
          </Link>
          <Link
            className={slug === "umi" ? "selected" : null}
            href="/umi"
          >
            Umi
          </Link>
          <Link
            className={slug === "shio" ? "selected" : null}
            href="/shio"
          >
            Shio
          </Link>
          <Link
            className={slug === "shimi" ? "selected" : null}
            href="/shimi"
          >
            Shimi
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
