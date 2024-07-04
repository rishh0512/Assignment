import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Flag from 'react-world-flags';

const currencies = [
   
    { code: 'NGN', country: 'NGA' },
    { code: 'USD', country: 'USA' },
    { code: 'EUR', country: 'EU' },
    { code: 'INR', country: 'IND' },
   
];

const CurrencyInput = () => {
    const [currency, setCurrency] = useState('INR');
    const [amount, setAmount] = useState('');

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop:'30px' }}>
            <FormControl variant="outlined" style={{ minWidth: 100 }}>
                <InputLabel id="currency-label"  style={{position: "absolute",
    top: "0px",
    
    pointerEvents: "none",
    color: "#666",
    transition: "transform 0.3s, top 0.3s, font-size 0.3s",
    zIndex: 1,
    fontSize: "20px",
    fontWeight: "bold",}}>Currency</InputLabel>
                <Select
                    labelId="currency-label"
                    id="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                    label="Currency"
                >
                    {currencies.map((curr) => (
                        <MenuItem key={curr.code} value={curr.code} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Flag code={curr.country} style={{ width: 20, height: 15 }} />
                            {curr.code}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                variant="outlined"
                label="Amount"
                value={amount}
                onChange={handleAmountChange}
                type="number"
                inputProps={{ min: "0", step: "0.01" }}
            />
        </div>
    );
};

export default CurrencyInput;
