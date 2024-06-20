import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
    height: 100%;
`;

const IngredientBox = styled(Box)`
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const RecipesList = ({ recipes }) => {
    const limitedRecipes = recipes.slice(0, 10);

    return (
        <Grid
            container
            rowSpacing={3}
            columnSpacing={5}
            padding={{ xs: 1, md: 3, lg: 5 }}
        >
            {limitedRecipes.map((recipe) => (
                <Grid item xs={12} md={6} lg={4} key={recipe.recipe.label}>
                    <StyledCard>
                        <CardMedia
                            sx={{ height: { xs: 100, sm: 140 } }}
                            image={recipe.recipe.image}
                            title="recipe image"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
                            >
                                {recipe.recipe.label}
                            </Typography>
                            <Box>
                                {recipe.recipe.ingredientLines.map((ingredientLine, index) => (
                                    <IngredientBox key={index}>
                                        <Typography variant="body2" component="span">
                                            {ingredientLine}
                                        </Typography>
                                    </IngredientBox>
                                ))}
                            </Box>
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipesList;
