import React from 'react';

const Title = ({ name, title }) => {
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-12 mx-auto">
                    <h1 className="font-weight-normal"> {name} <span>{title}</span> </h1>
                </div>
            </div>
        </div>
    );
};

export default Title;