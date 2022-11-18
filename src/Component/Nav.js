import React from 'react'
import logo from '../Asset/logo.png'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <>
            <nav className="navbar navChange navbar-expand-lg navbar-light bg-white purple  ">
                <a className="navbar-brand .dropImage" href="#/">
                    <img src={logo} alt="..." className='image' />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-2">
                            <Link className="nav-link  navbarLink fadePurple" to="/">My Assignment </Link>
                        </li>
                        <li className="nav-item mx-2">
                        <Link className="nav-link  navbarLink fadePurple" to="/referEarn">Chat with Mentor</Link>
                        </li>
                    </ul>
                    <div className="dropdown ">
                        <a className=" dropdown-toggle font-weight-bold mainLink purple" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#/">
                            <i className='fas fa-user-circle' style={{ fontSize: '20px',margin:'0px 10px'}}></i>
                            ProfileName
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#/">Action</a>
                            <a className="dropdown-item" href="#/">Another action</a>
                            <a className="dropdown-item" href="#/">Something else here</a>
                        </div>
                    </div>
                </div>
                <div className="btn-group dropChange Lhide">
                    <button type="button dropButton" className="btn bgpurple  text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ProfileName
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#/">Action</a>
                        <a className="dropdown-item" href="#/">Another action</a>
                        <a className="dropdown-item" href="#/">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#/">Separated link</a>
                    </div>
                </div>
            </nav>


        </>
    )
}
