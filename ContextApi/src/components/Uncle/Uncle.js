import React from 'react';

const Uncle = (props) => {
    const {House} = props
    return (
        <div>
            <h5>This is Uncle</h5>
            <h6>House: {House}</h6>
        </div>
    );
};

export default Uncle;