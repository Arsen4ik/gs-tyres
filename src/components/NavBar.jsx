// import logo from '../assets/tyre-logo.svg'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-75 fixed-top ">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img src={ logo } alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                    
            </Link>
            <Link to="/about" className='btn btn-dark about-btn'>О нас</Link>
        </div>
    </nav>
)

export default NavBar