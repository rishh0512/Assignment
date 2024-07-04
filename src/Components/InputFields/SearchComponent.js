import React, { useState } from 'react';
import { InputLabel, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <TextField
                variant="outlined"
                placeholder="Enter search keyword"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{marginTop:'30px'}}
                fullWidth
                sx={{
                    '& .MuiInputLabel-root': {
                        position: 'absolute',
                        top: 0,
                        left: 10,
                        transform: 'translate(0, 24px) scale(1)',
                        pointerEvents: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#666',
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '15.5px 14px',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&:hover': {
                            '& fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.23)', 
                            },
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#666',
                        },
                    },
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton aria-label="search" edge="start">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchComponent;
