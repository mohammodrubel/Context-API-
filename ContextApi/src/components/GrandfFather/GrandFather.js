import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {House,diamond} = props;
    
    return (
        <div>
            <h3>Grand Father</h3>
            <h2>House : {House}</h2>
            <div style={{display:'flex'}}>
                {/* <Father House={House} diamond={diamond}></Father> */}
                <Father House={House}></Father>
                <Uncle House={House}></Uncle>
                <Aunty House={House}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;