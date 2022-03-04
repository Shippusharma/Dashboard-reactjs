import React, { useContext } from 'react';
import { Mode } from '../context/DarkMode';

export default function Navbar() {

    const { toggleMode } = useContext(Mode);
    return (
        <div>
            <nav class="navbar fixed navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <button className="btn mx-1 my-1 btn-primary">Login</button>
                    <button className="btn mx-1 my-1 btn-primary">SighUp</button>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </nav>
        </div>
    )
}
