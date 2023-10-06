import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import { useEffect, useState} from "react";
import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsApi();
  }, []);

  const getPokemonsApi = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.error(err))
  } 
  return (
    <div>
      <NavBar />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
             <Grid item xs={2} key={key}>
              <PokemonCard name={pokemon.name}/>
           </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
