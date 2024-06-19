import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {IconButton, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



// import SearchIconfrom "@mui/icons-material/Search";

async function fetchRecepies(){
    const response = await fetch("");
    const przepisy = await response.json();
    console.log(przepisy);
}

export  const Searchabr = () => {
    return (
        <TextField
            label="Wyszukaj"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton onClick={fetchRecepies()}>
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
            fullWidth
        />
    );
};

export default function FullWidthTextField() {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
    );
}