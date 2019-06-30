import React,{useEffect, useState} from 'react';
import Trading from './components/trading';
import Bitcoin from './components/bitcoin';
import Navbar from './components/Navbar';
import Welcome from './components/welcome';
import './App.css';

const App = () => {

 const API_KEY = '';

 const [ticker, setInfo] = useState([]);
 const [total, setPrice] = useState([]);

 useEffect(() => {
   getData();
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
    setPrice(data.bpi.USD);
    console.log(data.bpi);
  }

 return (

   <div>
     <Navbar />
     <Welcome />    
     <Trading title={ticker.companyName} price={ticker.high} volume={ticker.latestVolume}/>
     <Bitcoin priceBit={total.rate}/>
   </div>
 );
}


export default App;