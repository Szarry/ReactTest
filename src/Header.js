import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from "@mui/material";
import Searchbar from './Searchbar';
import './Header.css';

export default function ButtonAppBar({ setRecipes }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="header-main">
                <Toolbar>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Pyszne jedzonko
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <Searchbar setRecipes={setRecipes} /> {}
            </Container>
        </Box>
    );
}
