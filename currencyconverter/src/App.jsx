import { useState } from 'react'
import { InputBox } from './componenets';
import useCurrencyInfo from './hooks/usecurrencyInfo'

function App() {
 
const [amount, setAmount] = useState(1);history
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [convertedAmount, setConvertedAmount] = useState(0);

const currencyInfo = useCurrencyInfo(from);

const options = Object.keys(currencyInfo);

const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
}
const convert = () => {
  setConvertedAmount(amount * currencyInfo[to]);
}

return (
  <div
      className="min-h-screen w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=600')`
      }}
  >
    
          <div className="w-full max-w-md mx-4 mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From" 
                          amount={amount}
                          currencyOptions={options}
                          onAmountChange={(amount) => setAmount(amount)}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          selectCurrency={from}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="from"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onAmountChange={(amount) => setAmount(amount)}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to} 
                          amountDisabled={true}
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      
  </div>
);
}

export default App; 