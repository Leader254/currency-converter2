import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import img from "../images/giphy.gif";

const App = () => {
  // Define the state variables to store the data
  const [countries, setCountries] = useState([ // weare using countries to populate the dropdown option
    // List of currency codes
    // Add more currencies if needed
    "USD", // United States Dollar
    "EUR", // Euros
    "JPY", // Japanese Yen
    "GBP", // British Pound Sterling
    "CAD", // Canadian Dollar
    "AUD", // Australian Dollar
    "CHF", // Swiss Franc
    "CNY", // Chinese Yuan
    "SEK", // Swedish Krona
    "NZD", // New Zealand Dollar
    "BBD", //"Barbados dollar"
    "BDT", //"Bangladeshi taka"
    "BGN", //"Bulgarian lev"
    "BHD", //"Bahraini dinar"
    "BIF", //"Burundian franc"
    "BMD", //"Bermudian dollar"
    "BND", //"Brunei dollar"
    "BOB", //"Boliviano"
    "BRL", //"Brazilian real"
    "BSD", //"Bahamian dollar"
    "BTN", //"Bhutanese ngultrum"
    "BWP", //"Botswana pula"
    "BYN", //"New Belarusian ruble"
    "BYR", //"Belarusian ruble"
    "BZD", //"Belize dollar"
    "CAD", //"Canadian dollar"
    "CDF", //"Congolese franc"
    "CHF", //"Swiss franc"
    "CLF", //"Unidad de Fomento"
    "CLP", //"Chilean peso"
    "CNY", //"Renminbi|Chinese yuan"
    "COP", //"Colombian peso"
    "CRC", //"Costa Rican colon"
    "CUC", //"Cuban convertible peso"
    "CUP", //"Cuban peso"
    "CVE", //"Cape Verde escudo"
    "CZK", //"Czech koruna"
    "DJF", //"Djiboutian franc"
    "DKK", //"Danish krone"
    "DOP", //"Dominican peso"
    "DZD", //"Algerian dinar"
    "EGP", //"Egyptian pound"
    "ERN", //"Eritrean nakfa"
    "ETB", //"Ethiopian birr"
    "EUR", //"Euro"
    "FJD", //"Fiji dollar"
    "FKP", //"Falkland Islands pound"
    "GBP", //"Pound sterling"
    "GEL", //"Georgian lari"
    "GHS", //"Ghanaian cedi"
    "GIP", //"Gibraltar pound"
    "GMD", //"Gambian dalasi"
    "GNF", //"Guinean franc"
    "GTQ", //"Guatemalan quetzal"
    "GYD", //"Guyanese dollar"
    "HKD", //"Hong Kong dollar"
    "HNL", //"Honduran lempira"
    "HRK", //"Croatian kuna"
    "HTG", //"Haitian gourde"
    "HUF", //"Hungarian forint"
    "IDR", //"Indonesian rupiah"
    "ILS", //"Israeli new shekel"
    "INR", //"Indian rupee"
    "IQD", //"Iraqi dinar"
    "IRR", //"Iranian rial"
    "ISK", //"Icelandic króna"
    "JMD", //"Jamaican dollar"
    "JOD", //"Jordanian dinar"
    "JPY", //"Japanese yen"
    "KES", //"Kenyan shilling"
    "KGS", //"Kyrgyzstani som"
    "KHR", //"Cambodian riel"
    "KMF", //"Comoro franc"
    "KPW", //"North Korean won"
    "KRW", //"South Korean won"
    "KWD", //"Kuwaiti dinar"
    "KYD", //"Cayman Islands dollar"
    "KZT" //"Kazakhstani tenge"
  ]);

  const [fromCurrency, setFromCurrency] = useState(""); // Selected "From" currency
  const [toCurrency, setToCurrency] = useState(""); // Selected "To" currency
  const [amount, setAmount] = useState(""); // Amount to convert
  const [exchangeRate, setExchangeRate] = useState(""); // Calculated exchange rate

  // Event handler for changing the "From" currency
  const handleFromCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setFromCurrency(selectedCurrency);
  };

  // Event handler for changing the "To" currency
  const handleToCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setToCurrency(selectedCurrency);
  };

  // Event handler for changing the amount
  const handleAmountChange = (event) => {
    const enteredAmount = event.target.value;
    setAmount(enteredAmount);
  };

  // Perform the currency conversion when the inputs change
  useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      const options = {
        // setting up optionsfor the HTTPS request
        method: "GET",
        url: "https://currency-exchange.p.rapidapi.com/exchange",
        params: {
          q: amount, // The amount of money to convert
          from: fromCurrency, // The currency to convert from 
          to: toCurrency, // The currency to convert to
        },
        headers: {
          "X-RapidAPI-Key": "ae9e2b5073msh6297fd8c2c779a2p15817bjsnb9b39c812a14",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      };

      // Fetch the exchange rate from the API using Axios
      axios
        .request(options) //Making the HTTP request to get the exchange rates
        .then((response) => {
          setExchangeRate(response.data);// updating the exchangeRate state variable with the response data 
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "17rem",
        marginRight: "auto",
      }}
    >
      <div className="form">
        {/* Currency conversion form */}
        <form className="currency-form">
          <h1>Currency Exchange App</h1>
          <div className="form-group">
            <label htmlFor="fromCurrency">From:</label>
            {/* Dropdown for selecting "From" currency */}
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              <option value="">Select a currency</option>
              {/* Map through the countries array to generate dropdown options */}
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="toCurrency">To:</label>
            {/* Dropdown for selecting "To" currency */}
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              <option value="">Select a currency</option>
              {/* Map through the countries array to generate dropdown options */}
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            {/* Input for entering the amount */}
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          {/* Display the conversion result if exchangeRate is available */}
          {exchangeRate && (
            <p>
              {amount} {fromCurrency} = {exchangeRate * amount} {toCurrency}
            </p>
          )}
        </form>
      </div>
      <div className="image">
        {/* Display an image */}
        <img src={img} alt="Currency Exchange" />
      </div>
    </div>
  );
};

export default App;
