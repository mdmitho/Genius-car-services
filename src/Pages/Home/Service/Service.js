import React from 'react';

const Service = ({service}) => {
    const {name,img,description, price} = service
    return (
        <div>
            <img src={img} alt="" />
            <h1>This is service :{name}</h1>
        </div>
    );
};

export default Service;