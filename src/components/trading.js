import React from 'react';

const StockInfo = ({title,price,volume}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Highest Price: {price}</p>
            <p>Today's Volume: {volume}</p>
            <h4>About</h4>
            <p></p>
        </div>
    )
}

export default StockInfo;