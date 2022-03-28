import React from "react"; 
import ExchangeRate from "./ExchangeRate";
import { useState } from 'react'
import axios from 'axios'

function CurrencyConverter(){
    const currencies = ['BTC','ETH','USD','XRP', 'LTC', 'ADC']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchange] = useState(0)

    const convert = () =>{

        const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': 'cdddad4fecmshbe8b38a94a89518p131a83jsn0b2a184e0b97'
        }
        };

        axios.request(options).then((response) => {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
       <div className="currency-converter">
           <h2>Currency Converter</h2>

           <div className="input-box">
           <table>
               <tbody>
                   <tr>
                       <td>Primary Currency</td>
                       <td>
                           <input
                                type="number"
                                name="currency-amount-1"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                       </td>
                       <td>
                           <select
                               value={""}
                               name="currency-option-1"
                               className="currency-options"
                               onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                           >
                          {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                           </select>

                       </td>
                   </tr>
                   <tr>
                       <td>Secondary Currency</td>
                       <td>
                           <input
                                type="number"
                                name="currency-amount-2"
                                value={""}
                            />

                       </td>
                       <td>
                           <select
                               value={chosenSecondaryCurrency}
                               name="currency-option-2"
                               className="currency-options"
                               onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                           >
                               {currencies.map((currency, _index) => (<option key={_index}>{currency} </option>))}
                           </select>

                       </td>
                   </tr>
               </tbody>
           </table>

           <button id="convert-button" onClick={convert}>Convert</button>

           <ExchangeRate />
      </div>
      </div>

    )
}

export default CurrencyConverter