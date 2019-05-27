import React,{useEffect, useState} from 'react';
import Trading from './components/trading';
import './App.css';

 const App = () => {
  const API_KEY = '';

  const [ticker, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

   const getData = async () => {
     const response = await fetch(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${API_KEY}`);
     const data = await response.json();
     setInfo(data);
     console.log(data);
   }
  return (
    <div className="App">
      <h1>Watchlist</h1>
      <Trading title={ticker.companyName} price={ticker.high} volume={ticker.latestVolume}/>
    </div>
  );
}

// function PageHead() {
//   return(
//     <div className="App">
//       <h1>Stock Wallet</h1>
//       <p>Apple Quote:</p>
//       <p>Latest XRP Price:</p>
//     </div>
//   );
// }

export default App;
