import { useState, useEffect } from 'react';

function useMoneyValue(value: string | undefined): string {
  const [formattedValue, setFormattedValue] = useState('');

  useEffect(() => {
    const newFormattedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'AED', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    setFormattedValue(newFormattedValue);
  }, [value]);

  return formattedValue;
}

export default useMoneyValue;
