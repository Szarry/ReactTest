import React, { Component } from 'react';
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const APP_ID = 'e303bb34';
const APP_KEY = '6fb077a66abfdb1d9b6581fddbcb23a4';
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'bacon',
        };
    }

    fetchRecipes = async () => {
        const { query } = this.state;
        const url = `${BASE_URL}?q=${query}&type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.props.setRecipes(data.hits);
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    handleChange = (event) => {
        this.setState({ query: event.target.value });
    };

    handleSearchClick = () => {
        this.fetchRecipes();
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.fetchRecipes();
        }
    };

    componentDidMount() {
        this.fetchRecipes();
    }

    render() {
        const { query } = this.state;

        return (
            <TextField
                label="Wyszukaj"
                value={query}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={this.handleSearchClick}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
        );
    }
}

export default Searchbar;
