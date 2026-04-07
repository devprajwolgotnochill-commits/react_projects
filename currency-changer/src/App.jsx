import { useState } from 'react'
import './App.css'
import {Inputbox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [result, setResult] = useState(0);

  // fetching currency data using custom hook == what kind of data ????????
  const currencyData = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyData);


  const convertCurrency = () => {
    if (currencyData && currencyData[toCurrency]) {
      const rate = currencyData[toCurrency];
      setResult(amount * rate);
    }
  }
  

  return (
    // <div 
    // className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    // style={{backgroundImage: `url(https://i.pinimg.com/1200x/73/e8/bc/73e8bcd43f2a5940c4cdf5d8599eda7f.jpg)`}} 
    // >
    //     <h1 className='title'>Currency Changer</h1>
    // </div>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://i.pinimg.com/1200x/73/e8/bc/73e8bcd43f2a5940c4cdf5d8599eda7f.jpg)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convertCurrency()

          }}>

            <div className='w-full mb-1'>
              <Inputbox
              label="from"
              amt={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFromCurrency(currency)}
              amtChange={(amount) => setAmount(amount)}
              defaultCurrency={fromCurrency}
              />
            </div>
  
            <div className='w-full mb-1'>
              <Inputbox   
              label="to"
              currencyOptions={options}
              amt={result}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              defaultCurrency={toCurrency}
              amtChange={(amount) => setAmount(isNaN(amount) ? 0 : amount)}
              amtDisable={true}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors'
            
            >Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>


          </form>
        </div>
      </div>

    </div>
    
  )
}

export default App
