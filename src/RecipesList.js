import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
    height: 100%;
`;

export const RecipesList = ({ recipes }) => {
    return (
        <Grid
            container
            rowSpacing={3}
            columnSpacing={5}
            padding={{ xs: 1, md: 3, lg: 5 }}
        >
            {recipes.map((recipe) => (
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
                            {recipe.recipe.ingredientLines.map((ingredientLine, index) => (
                                <Typography key={index} gutterBottom variant="body2" component="div">
                                    {ingredientLine}
                                </Typography>
                            ))}
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};
