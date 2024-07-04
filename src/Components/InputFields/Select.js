import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, FormHelperText } from '@mui/material';
import { FaHeart } from 'react-icons/fa'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomSelect = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [textInput, setTextInput] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <div>
           
            <FormControl fullWidth style={{ marginBottom: '20px', marginTop: '30px' }}>
                <InputLabel
                    htmlFor="select-label"
                    style={{
                        position: "absolute",
                        top: "0px",
                        pointerEvents: "none",
                        color: "#666",
                        transition: "transform 0.3s, top 0.3s, font-size 0.3s",
                        zIndex: 1,
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Select Option
                </InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={selectedOption}
                    onChange={handleChange}
                    IconComponent={ArrowDropDownIcon}
                    input={
                        <OutlinedInput
                            label="Select Option"
                            style={{
                                borderColor: selectedOption ? 'black' : 'rgba(0, 0, 0, 0.23)',
                            }}
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&:hover': {
                                        borderColor: selectedOption ? 'black' : 'rgba(0, 0, 0, 0.23)',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                        />
                    }
                    fullWidth
                >
                    {[
                        { value: 'option1', label: 'Option 1' },
                        { value: 'option2', label: 'Option 2' },
                        { value: 'option3', label: 'Option 3' },
                    ].map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Helper text goes here</FormHelperText>
            </FormControl>

            
            <FormControl fullWidth style={{ marginBottom: '20px', marginTop: '30px' }}>
                <InputLabel
                    htmlFor="select-label2"
                    style={{
                        position: "absolute",
                        top: "0px",
                        pointerEvents: "none",
                        color: "#666",
                        transition: "transform 0.3s, top 0.3s, font-size 0.3s",
                        zIndex: 1,
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Select Option
                </InputLabel>
                <Select
                    labelId="select-label2"
                    id="select2"
                    value={textInput}
                    onChange={handleTextInputChange}
                    IconComponent={ArrowDropDownIcon} 
                    input={
                        <OutlinedInput
                            label="Select Option 2"
                            style={{
                                borderColor: textInput ? 'black' : 'rgba(0, 0, 0, 0.23)',
                                paddingLeft: '30px', 
                            }}
                            startAdornment={
                                <InputAdornment position="start" style={{ paddingRight: '10px' }}>
                                    <FaHeart />
                                </InputAdornment>
                            }
                            sx={{
                                '& .MuiOutlinedInput-input': {
                                    '&:hover': {
                                        borderColor: textInput ? 'black' : 'rgba(0, 0, 0, 0.23)',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                        />
                    }
                    fullWidth
                >
                    {[
                        { value: 'option4', label: 'Option 4' },
                        { value: 'option5', label: 'Option 5' },
                        { value: 'option6', label: 'Option 6' },
                    ].map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Helper text goes here</FormHelperText>
            </FormControl>
        </div>
    );
};

export default CustomSelect;
