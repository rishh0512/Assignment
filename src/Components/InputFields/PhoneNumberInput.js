import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import Flag from 'react-world-flags';

const countries = [
    { code: 'NGA', phoneCode: '+234' },
    { code: 'USA', phoneCode: '+1' },
    { code: 'EU', phoneCode: '+44' },
    { code: 'IND', phoneCode: '+91' },
];

const PhoneNumberInput = () => {
    const [country, setCountry] = useState('IND');
    const [phoneCode, setPhoneCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryChange = (event) => {
        const selectedCountry = countries.find(c => c.code === event.target.value);
        setCountry(selectedCountry.code);
        setPhoneCode(selectedCountry.phoneCode);
    };

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    const handleKeyPress = (event) => {
        if (!/[0-9]/.test(event.key) || phoneNumber.length >= 10) {
            event.preventDefault();
        }
    };

    return (
        <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormControl variant="outlined" style={{ minWidth: 100 }}>
                    <InputLabel id="country-label" style={{
                        position: "absolute",
                        top: "0px",
                        pointerEvents: "none",
                        color: "#666",
                        transition: "transform 0.3s, top 0.3s, font-size 0.3s",
                        zIndex: 1,
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>Country</InputLabel>
                    <Select
                        labelId="country-label"
                        id="country"
                        value={country}
                        onChange={handleCountryChange}
                        label="Country"
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.code} value={country.code} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <Flag code={country.code} style={{ width: 20, height: 15 }} />
                                {country.phoneCode}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormHelperText>Country Code</FormHelperText>
            </div>
            <div>
            <TextField
                variant="outlined"
                label="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                onKeyPress={handleKeyPress}
                type="tel"
                inputProps={{ maxLength: 10 }}
            />
            </div>
           
        </div>
    );
};

export default PhoneNumberInput;
