import React, { useEffect, useState } from 'react';
import Trading from './components/trading';
import Bitcoin from './components/bitcoin';
import Navbar from './components/Navbar';
import News from './components/news';
import Line from './components/line';
import './App.css';

const App = () => {

  const API_KEY = 'pk_570d6172523a4af8a34f56e226b546cf';

  const [ticker, setInfo] = useState([]);
  const [total, setPrice] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('TSLA');

  useEffect(() => {
    // getData();
    getBit();
  }, [query]);

  const getData = async () => {
    const response = await fetch(`https://cloud.iexapis.com/stable/stock/${query}/quote?token=${API_KEY}`);
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

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  return (

    <div>
      <Navbar />
      <div className="text-center">
        <div className="jumbotron" >
          <h1>Welcome, Traders</h1>
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search by symbol" />
            <button className="search-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Trading title={ticker.companyName} price={ticker.high}
        volume={ticker.latestVolume} high={ticker.week52High} closing={ticker.close}/>
      <Bitcoin priceBit={total.rate} />
      <News />
      <Line />
    </div>
  );
}


export default App;