import React from 'react';

const navbar = () => {
    return (
        <div className="row">
            <div className="col-sm">
                <a href="/">
                    DOW JONES
                </a>
                <svg className="tickerSymbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
                    <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="2" d="m1 6 5-4 5 4">
                    </path>
                </svg>
                <p>0.77%</p>
            </div>
            <div className="col-sm">
                <a href="/">
                    DOW JONES
                </a>
                <p>0.77%</p>
            </div>
            <div className="col-sm">
                <a href="/">
                    DOW JONES
                </a>
                <p>0.77%</p>
            </div>
        </div>
    )
}

export default navbar;