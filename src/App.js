import React,{useEffect} from 'react';
import './App.css';

 const App = () => {

  useEffect(() => {
    getData();
  }, []);

   const getData = async () => {
     const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
     const data = await response.json();
     console.log(data);
     console.log(data.bpi.USD);
   }
  return (
    <div>
      <PageHead />
    </div>
  );
}

function PageHead() {
  return(
    <div className="App">
      <h1>Crypto Wallet</h1>
      <p>Latest BitCoin Price:</p>
      <p>Latest XRP Price:</p>
    </div>
  );
}

export default App;
