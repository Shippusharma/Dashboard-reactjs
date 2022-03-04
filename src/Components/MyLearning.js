import React from 'react'

export default function MyLearning() {
    return (
        <>
            <hr />
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-8">
                        <img src="https://source.unsplash.com/collection/190727/1600x900" className="img-fluid rounded-start"
                            alt="..." />
                        <h5 className="my-3">Description</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam velit nemo! Fuga nesciunt unde expedita, sit rem molestias quis, qui laboriosam, natus in ullam ducimus voluptatum accusamus eligendi optio.</p>

                    </div>


                    <div className="col" style={{ "backgroundColor": 'cyan'}}>
                        <h2 className="container text-center"><b>MyLearning PlayList</b> </h2> <hr />
                        <div className="container row">
                            <h5>Title 1</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div> <hr />
                        <div className="container row">
                            <h5>Title 2</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div><hr />
                        <div className="container row">
                            <h5>Title 3</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div><hr />
                        <div className="container row">
                            <h5>Title 4</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div><hr />
                        {/* <div className="container row">
                            <h5>Title 5</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div><hr />
                        <div className="container row">
                            <h5>Title 6</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
