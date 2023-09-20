import React from "react";

const Footer = () => {
    const d = new Date();    
    return (<div className="container-fluid bg-dark text-white p-4 ">
                <div className="col-12 d-flex">
                    <p className="mx-auto">Copyright © Your Website {d.getFullYear()}</p>
                </div>
            </div>);
};

export default Footer;