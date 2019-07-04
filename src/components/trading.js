import React from 'react';

const StockInfo = ({title,price,volume,high,closing}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Highest Price: {price}</p>
            <p>Today's Volume: {volume}</p>
            <p>52 Week High: ${high}</p>
            <p>Closing Price: ${closing}</p>
            <h4>About</h4>
            <p></p>
        </div>
    )
}

export default StockInfo;