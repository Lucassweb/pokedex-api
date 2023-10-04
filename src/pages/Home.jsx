import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
