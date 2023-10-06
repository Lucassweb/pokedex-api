import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsApi();
  }, []);

  const getPokemonsApi = () => {
    let endpoint = [];
    for (let i = 1; i < 50; i++) {
      endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoint.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.error(err));
  };

  //filter
  const pokeFilter = (name) => {
    let filterPokemons = [];
    if (name == "") {
      getPokemonsApi();
    }
    for (var i in pokemons) {
      //percorrendo antigo array de pokemons
      if (pokemons[i].data.name.includes(name)) {
        filterPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filterPokemons);
  };

  return (
    <div>
      <NavBar pokeFilter={pokeFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
