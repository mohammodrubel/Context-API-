import React from 'react';

const Sister = (props) => {
    const {House} = props
    return (
        <div>
            <h5> Sister </h5>
            <h6>House : {House}</h6>
        </div>
    );
};

export default Sister;