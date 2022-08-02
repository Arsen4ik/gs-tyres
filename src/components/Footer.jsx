import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70" style={{ 'backgroundColor': '#AAAAAA' }}>
      <a href="mailto:sales@gs-tyres.com" className="link b f3 f2-ns dim black-70 lh-solid">
        sales@gs-tyres.com
      </a>
      <br />
      <br />
      <p className="f6 db b ttu lh-solid">© 2022 GS-TYRES LLC.</p>
    </footer>
  );
};

export default Footer;
