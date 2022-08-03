// import logo from '../assets/tyre-logo.svg'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => (
  // <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-75 fixed-top ">
  //     <div className="container-fluid">
  //         <Link to="/" className="navbar-brand">
  //             <img src={ logo } alt="" width="30" height="24" className="d-inline-block align-text-top"/>

  //         </Link>
  //         <Link to="/about" className='btn btn-dark about-btn'>О нас</Link>
  //     </div>
  // </nav>

  <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l" style={{'zIndex': '1'}}>
    <nav className="f6 fw6 ttu tracked">
      <Link to='/' className="link dim white dib mr3"  title="Home">
        Home
      </Link>
      <Link to='/news' className="link dim white dib mr3"  title="News">
        News
      </Link>
      <Link to='/about' className="link dim white dib mr3" title="About">
        About
      </Link>
      <Link to='/contacts' className="link dim white dib mr3" title="Contacts">
      Contact
      </Link>
     
    </nav>
  </header>
);

export default NavBar;
