import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const MainNavBar = () => {

    
    const [isDropdownOpen, setIsDropdownOpen] = useState();

    const handleDropdownToggle = () => {
      setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark-subtle" data-bs-theme="light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                             <a className="navbar-brand"  href="home">
                                <img src="../../assets/Logo.jpg" alt="ImageNotfound" width={40} height={50}></img>
                            </a> 
                        </li>
                        <li className="nav-item dropdown">
                            <button type="button" onClick={handleDropdownToggle} className= {`nav-link dropdown-toggle ${isDropdownOpen ? 'show':''}`}  aria-expanded={isDropdownOpen}>
                                New Cars
                            </button>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show':''}`}>
                                <li><Link className="dropdown-item" to="trending-cars">Trending Cars</Link></li>
                                <li><Link className="dropdown-item" to="top-cars">Top Cars</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`review`}> Reviews&News</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <form className=" d-flex gap-2">
                                <input className=" form-control " type="search" placeholder="Search" />
                                <Link className="nav-link" to="login">
                                    <button type="button" className="btn btn-primary btn-outline-dark btn-sm">Login</button> </Link>
                                <Link className="nav-link" to="register">
                                    <button type="button" className="btn btn-Success btn-outline-primary btn-sm">Register</button> </Link>

                            </form>
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />
        </div>
    )

}
export default MainNavBar;