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
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h3"
                            component="div"
                        >
                            Pyszne jedzonko
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                        >
                            Najlepsze przepisy wprost od MeritoDevTeam
                        </Typography>
                    </Box>
                    <Button
                        color="inherit"
                        sx={{
                            border: '1px solid',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            textTransform: 'none',
                            fontSize: '0.875rem',
                            padding: '6px 12px',
                        }}
                    >
                        Logowanie
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Searchbar setRecipes={setRecipes} />
            </Container>
        </Box>
    );
}
