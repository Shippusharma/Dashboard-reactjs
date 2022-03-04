import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            
            <hr />
            <footer className=" pt-5  text-center text-small  bg-dark text-light">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h2><i className="bi bi-journal-code"></i> DashBoard</h2>
                                <p>
                                    <h6>Address: </h6>
                                    Hirapur <br />
                                    Raipur <br />
                                    Chhattisgarh <br /><br />
                                    <strong>Phone: </strong> +123456789<br />
                                    <strong>Email: </strong> info @example.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4><i className="bi bi-link-45deg"></i> Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4><i className="bi bi-collection"></i> Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="technology.html">Technolgy</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="webtechnology.html">Web Technolgy</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="support.html">Support</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="writeforus.html">Wright for us</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4><i className="bi bi-share"></i> Social Media</h4>
                                <div className="social-links mt-3">
                                    <ul>
                                        <li><Link to="/" className="twitter"><i className="bx bxl-twitter"></i><i
                                            className="bi bi-twitter"></i> Twitter</Link></li>
                                        <li><Link to="/" className="facebook"><i className="bx bxl-facebook"></i><i
                                            className="bi bi-facebook"></i> Facebook</Link></li>
                                        <li><Link to="/" className="instagram"><i className="bx bxl-instagram"></i><i
                                            className="bi bi-instagram"></i> Instagram</Link></li>
                                        <li><Link to="/" className="github"><i className="bx bxl-skype"></i><i className="bi bi-github"></i>
                                            Git-GitHub</Link></li>
                                        <li><Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i><i
                                            className="bi bi-linkedin"></i> Linkedin</Link></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="/">Privacy</Link></li>
                    <li className="list-inline-item"><Link to="/">Terms</Link></li>
                    <li className="list-inline-item"><Link to="/">Support</Link></li>
                </ul>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        iCoder &copy; Copyright <strong><span>| Shippu Sharma |</span></strong> All Rights Reserved
                    </div>

                </div>
            </footer>
        </>
    )
}
