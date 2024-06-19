import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from "@mui/material";
import Searchbar from './Searchbar';
import './Header.css';

export default function ButtonAppBar({ setRecipes }) { // Przekazanie setRecipes jako props
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="header-main">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <Searchbar setRecipes={setRecipes} /> {/* Przekazanie setRecipes do Searchbar */}
            </Container>
        </Box>
    );
}
