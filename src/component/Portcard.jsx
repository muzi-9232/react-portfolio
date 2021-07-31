import React from 'react';
//import {NavLink} from 'react-router-dom';

const PortCard = (props) => {
    return (
        <>

<div className="col-md-4">
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src={props.imgsrc} alt="..."/>
                                        <div className="card-body">
                                            
                                            <div className="card-title">
                                            <a href={props.wurl} target="_blank" rel="noopener noreferrer">View</a>
                                               
                                                </div>
                                                </div>

                                        {/* <NavLink to={props.wurl}>Click Me</NavLink> */}
                                    </a>
                                   
                                </div>

        </>

        
    )
}

export default PortCard;