import React from 'react';
import Myself from './../MySelf/Myself';
import Brother from './../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {House,diamond} = props
    return (
        <div>
            <h5>This is Father</h5>
            <h6>House {House}</h6>
            <div style={{display:'flex'}}>
                
                
                <Brother House={House}></Brother>
                <Myself  House={House}></Myself>
                {/* <Myself  House={House} diamond={diamond}></Myself> */}
                <Sister  House={House}></Sister>
            </div>
        </div>
    );
};

export default Father;