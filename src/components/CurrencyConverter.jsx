import React from "react"; 
import ExchangeRate from "./ExchangeRate";
import { useState } from 'react'

function CurrencyConverter(){
    const currencies = ['BTC','ETH','USD','XRP', 'LTC', 'ADC']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    console.log(setAmount);

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
                                value={""}
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
                               value={""}
                               name="currency-option-2"
                               className="currency-options"
                               onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                           >
                           <option>

                           </option>
                           </select>

                       </td>
                   </tr>
               </tbody>
           </table>
           <ExchangeRate />
      </div>
      </div>

    )
}

export default CurrencyConverter