import React,{useEffect, useState} from 'react';
import Trading from './components/trading';
import Bitcoin from './components/bitcoin';
import './App.css';

const App = () => {

 const API_KEY = '';

 const [ticker, setInfo] = useState([]);

 useEffect(() => {
  //  getData();
  getBit();
 }, []);

  const getData = async () => {
    const response = await fetch(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${API_KEY}`);
    const data = await response.json();
    setInfo(data);
    console.log(data);
  }

  const getBit = async () => {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    const data = await response.json();
    console.log(data);
  }

 return (

   <div>
     <Nav />
     <Trading title={ticker.companyName} price={ticker.high} volume={ticker.latestVolume}/>
   </div>
 );
}

const Nav = () => {
 return(
   <div>
     <ul className="navBar">
       <li>Home</li>
       <li>News</li>
       <li>Test</li>
     </ul>
     <h1>Stock Wallet</h1>
     <h1>Watchlist</h1>
   </div>
 )
}

export default App;