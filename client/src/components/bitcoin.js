import React from 'react';

const Bit = ({priceBit}) => {
    return(
        <div>
            <h2 id="bitCoin">Bitcoin Watch</h2>
            <p>The Current Bitcoin Price in USD is: ${priceBit} </p>
            <hr></hr>
        </div>
    )
}

export default Bit;