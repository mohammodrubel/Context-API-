import React, { useContext } from 'react';
import { Diamonds } from './../../App';



const Spicial = () => {
// const Spicial = (props) => {
    const abc = useContext(Diamonds)
    // console.log(abc)
    // const {diamond} = props
    return (
        <div>
            <h5>This is spicial</h5>
            <h6>{abc}</h6>
        </div>
    );
};

export default Spicial;