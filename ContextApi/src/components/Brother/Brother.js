import React from 'react';

const Brother = (props) => {
    const {House} = props
    return (
        <div>
            <h5>Brother </h5>
            <h6>House= {House}</h6>
        </div>
    );
};

export default Brother;