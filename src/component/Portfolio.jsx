import React from 'react';

import PCApi from './Api';
import PortCard from './Portcard';

const Portfolio = () => {

    return (
        <>


            <section className="bg-white pt-5">
                <div className="container">
                    <div className="row justify-content-center">

                    <div className="text-uppercase-expanded mb-2 fs-4 fw-bolder text-primary">Portfolio</div>
                    <hr className="mt-0 mb-5" style={{marginLeft:'13px',marginRight:'13px'}} />
                        {
                            PCApi.map((val) => {
                               return(
                                <PortCard key={val.id}
                                imgsrc={val.imgsrc}
                                wurl={val.wurl}
                                />
                                )
                            })
                        }






                    </div>
                </div>

            </section>



            
        </>
    )
}

export default Portfolio;

