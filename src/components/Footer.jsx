import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className="bg-dark text-center text-white fixed-bottom">
    // <footer className="bg-dark text-center text-white navbar-expand-lg ">
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark opacity-75 fixed-bottom">
    
     
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
         © 2022
        <br />
        <Link to="/" className="text-white">
          GSTYRES
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
