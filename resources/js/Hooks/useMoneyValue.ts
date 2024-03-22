import { useState, useEffect } from 'react';

function useMoneyValue(value: string | undefined, currency: string = 'AED'): string {
  const [formattedValue, setFormattedValue] = useState('');

  // List of valid currencies
  const validCurrencies = ['USD', 'EUR', 'AED', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'SAR'];

  // Check if the passed currency is valid, if not use the default currency
  const validCurrency = validCurrencies.includes(currency.toUpperCase()) ? currency.toUpperCase() : 'AED';

  useEffect(() => {
    const newFormattedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: validCurrency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    setFormattedValue(newFormattedValue);
  }, [value, validCurrency]);

  return formattedValue;
}

export default useMoneyValue;
