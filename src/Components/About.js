import React from 'react';
import { Link } from 'react-router-dom';
import banner from './banner.jpg';

export default function About() {
    return (
        <>
            <div className="container my-3">
                <section className="u-clearfix u-grey-90 u-section-2" id="About">
                    <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-shape-rectangle u-size-36 u-layout-cell-1">
                                    <div className="u-container-layout u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                                        <div className="u-container-style u-group u-palette-2-base u-group-1">
                                            <div className="u-container-layout u-valign-middle u-container-layout-2">
                                                <h2 className="u-text u-text-body-alt-color  u-text-default u-text-2">
                                                    About </h2>
                                            </div>
                                        </div>
                                        <p className="u-align-left u-text u-text-3">Dictum sit amet justo donec enim diam vulputate.
                                            Sociis natoque penatibus et magnis dis parturient.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt.
                                        </p>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-image u-layout-cell u-shape-rectangle u-size-24 u-image-1"
                                    data-image-width="700" data-image-height="924">
                                    <div className="u-container-layout u-container-layout-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div className="container">
            {/* eslint-disable-next-line */}
                <img className="img-fluid " src={banner} className="d-block w-100" alt="..." /> <br />
                <div id="footer-sidebar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="footer-widget">
                                    <h4>About Company</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro praesentium, doloremque,
                                        aperiam recusandae rem aliquam.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, molestias.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="footer-widget">
                                    <h4>Latest Company News</h4>
                                    <ul className="latest-news">
                                        <li><Link to="/">Lorem ipsum dolor sit amet, consectetur.</Link></li>
                                        <li><Link to="/">Lorem ipsum dolor sit amet, consectetur.</Link></li>
                                        <li><Link to="/">Lorem ipsum dolor sit amet, consectetur.</Link></li>
                                        <li><Link to="/">Lorem ipsum dolor sit amet, consectetur.</Link></li>
                                        <li><Link to="/">Lorem ipsum dolor sit amet, consectetur.</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="footer-widget">
                                    <h4>Company Address</h4>
                                    <address>
                                        <b>iBlog, Inc.</b><br />
                                        455 Hill Road, Ambala Cantt<br />
                                        HARYANA, INDIA 133001<br />
                                        P: (123) 456-7890
                                    </address>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
