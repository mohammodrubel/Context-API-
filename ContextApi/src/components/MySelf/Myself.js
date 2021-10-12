import React from 'react';
import Spicial from '../Spicial/Spicial';

const Myself = (props) => {
    const {House,diamond} = props
    return (
        <div>
            <h5>My Self</h5>
            <h6>House {House}</h6>
            <Spicial ></Spicial>
            {/* <Spicial diamond={diamond} ></Spicial> */}
        </div>
    );
};

export default Myself;