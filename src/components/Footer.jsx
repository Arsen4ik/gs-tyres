import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer classNameNameName="bg-dark text-center text-white fixed-bottom">
    // <footer classNameNameName="bg-dark text-center text-white navbar-expand-lg ">
    <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70">
      <a href="mailto:sales@gs-tyres.com" className="link b f3 f2-ns dim black-70 lh-solid">
        sales@gs-tyres.com
      </a>
      <br />
      <br />
      <p className="f6 db b ttu lh-solid">© 2022 GS-TYRES LLC.</p>
      {/* <div className="mt5">
        <a
          href="/language/"
          title="Language"
          className="f6 dib pr2 mid-gray dim"
        >
          Language
        </a>
        <a href="/terms/" title="Terms" className="f6 dib ph2 mid-gray dim">
          Terms of Use
        </a>
        <a href="/privacy/" title="Privacy" className="f6 dib pl2 mid-gray dim">
          Privacy
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
