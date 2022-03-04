import React from 'react';
import { Link } from 'react-router-dom';
import RightSide from './RightSide';
import Buttons from './Buttons';


export default function Home() {
    return (
        <>{<Buttons/>} <hr/>
            <div className="container-fluid"> <br />

                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <h2>Main Menu </h2> <hr />
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle px-0">
                                        <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <span className="ms-1 d-none d-sm-inline">Profile</span> </Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav-link px-0 align-middle">
                                        <span className="ms-1 d-none d-sm-inline">Account</span></Link>
                                </li>
                                <li>
                                    <Link to="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <span className="ms-1 d-none d-sm-inline">Setting</span></Link>
                                </li>
                                <li>
                                    <Link to="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <span className="ms-1 d-none d-sm-inline">Help</span> </Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav-link px-0 align-middle">
                                        <span className="ms-1 d-none d-sm-inline">Feedback</span>
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="col py-3">
                        
                        <div className="container">
                            {<RightSide />}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
