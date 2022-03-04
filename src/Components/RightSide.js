import React from 'react';
import { Link } from 'react-router-dom';

export default function RightSide() {
    return (
        <>

            <div className="container row ">
                <div className="card col mx-2 ">
                    <img src="https://source.unsplash.com/200x100/?nature,water" className="card-img-top" alt="Img" />
                    <div className="card-body">
                        <h5 className="card-title">Title 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of
                            the
                            card's content.</p>
                        <Link to="https://www.youtube.com" className="btn btn-primary">Go somewhere &rarr;</Link>
                    </div>

                </div>
                <div className="card col mx-2 ">
                    <img src="https://source.unsplash.com/200x100/?nature,water" className="card-img-top" alt="Img" />
                    <div className="card-body">
                        <h5 className="card-title">Title 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of
                            the
                            card's content.</p>
                        <Link to="https://www.youtube.com" className="btn btn-primary">Go somewhere &rarr;</Link>
                    </div>

                </div>
                <div className="card col mx-2">
                    <img src="https://source.unsplash.com/200x100/?nature,water" className="card-img-top" alt="Img" />
                    <div className="card-body">
                        <h5 className="card-title">Title 3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of
                            the
                            card's content.</p>
                        <Link to="https://www.youtube.com" className="btn btn-primary">Go somewhere &rarr;</Link>
                    </div>

                </div>
            </div>
            <div className="container row  my-2">
                <div className="card col mx-2 ">
                    <img src="https://source.unsplash.com/200x100/?nature,water" className="card-img-top" alt="Img" />
                    <div className="card-body">
                        <h5 className="card-title">abc title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of
                            the
                            card's content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere &rarr;</Link>
                    </div>

                </div>
                <div className="card col mx-2 ">
                    <img src="https://source.unsplash.com/200x100/?nature,water" className="card-img-top" alt="Img" />
                    <div className="card-body">
                        <h5 className="card-title">xyz title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of
                            the
                            card's content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere &rarr;</Link>
                    </div>

                </div>
                <div className="card col mx-2">
                    <img src="https://source.unsplash.com/200x100/?nature,water" className="card-img-top" alt="Img" />
                    <div className="card-body">
                        <h5 className="card-title">123 title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of
                            the
                            card's content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere &rarr;</Link>
                    </div>

                </div>
            </div>
        </>



    )
}
