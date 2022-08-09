import { Link } from "react-router-dom";

const Footer = () => {
  return (

    // <footer classNameName="ph3 ph4-ns pv6 bt b--black-10 black-70" style={{ 'backgroundColor': '#AAAAAA' }}>
    //   <a href="mailto:sales@gs-tyres.com" classNameName="link b f3 f2-ns dim black-70 lh-solid">
    //     sales@gs-tyres.com
    //   </a>
    //   <br />
    //   <br />
    //   <p classNameName="f6 db b ttu lh-solid">© 2022 GS-TYRES LLC.</p>
    // </footer>
    <footer className="pa4 pa5-l black-70 bg-silver bt b--black-10">
      <div className="mb4-l cf">
        <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4">GS-TYRES</h1>

        
          <h4 className="f5 f4-l fw6">KAZAN</h4>
          {/* <span className="f7 f6-l db black-70">837 Larkin St.</span> */}
          <span className="f7 f6-l black-70">TATARSTAN</span>
          <a className="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+79961232940">
            +7 (996) 123-29-40
          </a>
          <Link to='/contacts' className="link dim black-90 fw6 dib mr3" title="Contacts">
            Contact Us
          </Link>
       
        {/* <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
      <h4 className="f5 f4-l fw6">LA</h4>
      <span className="f7 f6-l db black-70">
        1111 Manor Way
      </span>
      <span className="f7 f6-l di black-70">
        Los Angeles, CA 90048
      </span>
      <a href="tel:+13235555555" className="f6 db fw6 pv3 link dim black-70" title="Call the LA office.">
        +1 323-555-5555
      </a>
    </article>
    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <h4 className="f5 f4-l fw6">London</h4>
      <span className="f7 f6-l db black-70">11 Downey St.</span>
      <span className="f7 f6-l black-70">London, UK</span>
      <a href="tel:+5555555555" className="link dim f6 db fw6 pv3 black-70" title="Call the London office">+44 0 5555-5555</a>
    </article>
    <article className="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
      <h4 className="f5 f4-l fw6">Tokyo</h4>
      <span className="f7 f6-l db black-70">1982 Flangan Rd.</span>
      <span className="f7 f6-l">Shinjuku, Tokyo</span>
      <a href="tel:+444444444444" className="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
        +99 5555-5555
      </a>
    </article> */}
      </div>
      {/* <section className="cf mb5">
    <div className="mb4 mb0-ns w-100 w-50-l fr">
      <a className="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:sales@gs-tyres.com" >
      sales@gs-tyres.com
      </a>
    </div>
    <div className="mb4 mb0-ns fl w-100 w-50-l" >
      <p className="f4 fw6 mb2 f6 mt0">
        Sign up for our newsletter.
      </p>
      <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"/>
      <input type="submit" className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"/>
    </div>
  </section> */}
      <div className="dt dt--fixed w-100" >
        <div className="dn dtc-ns v-mid">
          <p className="f7 black-70 dib pr3 mb3">
            Copyright © GS-TYRES 2022
          </p>
        </div>

      </div>
      <div className="db dn-ns">
        <p className="f7 black-70 mt4 tc">
          Copyright © GS-TYRES 2022
        </p>
      </div>
    </footer>

  );
};

export default Footer;
