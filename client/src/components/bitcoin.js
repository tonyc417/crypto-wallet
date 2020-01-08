import React from 'react';

const Bit = ({priceBit}) => {
    return(
        <div className="text-center">
            <h2 id="bitCoin">Bitcoin Watch</h2>
            <h4>The Current Bitcoin Price in USD is: ${priceBit} </h4>
            <hr></hr>
        </div>
    )
}

export default Bit;