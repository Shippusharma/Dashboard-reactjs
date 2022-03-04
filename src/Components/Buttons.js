import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyLearning from './MyLearning';
import MyCareer from './MyCareer';
import Tool from './Tool';
import Resources from './Resources';

export default function Buttons(props) {

    const [op, setOp] = useState('')

    const LearningClick = () => {
        console.log("Learning button Clicked.....");
        setOp(<MyLearning />);
    }
    const CareerClick = () => {
        console.log("Career button Clicked.....");
        setOp(<MyCareer />)
    }
    const ToolsClick = () => {
        console.log("Tools button Clicked.....");
        setOp(<Tool />)
    }
    const ResourseClick = () => {
        console.log("Resourse button Clicked.....");
        setOp(<Resources />)
    }

    return (
        <>
            <div className="container d-flex content-center btn-group  my-1" role="group" aria-label="Basic checkbox toggle button group" >
                <Link to="/" onClick={LearningClick} className="btn mx-2 my-1 btn-primary text-light" tabIndex="-1" role="button" aria-disabled="true">
                    MyLearning </Link>
                <Link to="/" onClick={CareerClick} className="btn mx-2 my-1 btn-warning text-light" tabIndex="-1" role="button" aria-disabled="true">MyCareer</Link>
                <Link to="/" onClick={ToolsClick} className="btn mx-2 my-1 btn-info text-light" tabIndex="-1" role="button"
                    aria-disabled="true">Tools</Link>
                <Link to="/" onClick={ResourseClick} className="btn mx-2 my-1 btn-danger text-light" tabIndex="-1" role="button"
                    aria-disabled="true">Resource</Link>
            </div>   
            <div>
                {op}
            </div>
        </>
    )
}
