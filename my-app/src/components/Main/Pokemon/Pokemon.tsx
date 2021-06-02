import { getPokemon } from "app/actions/pokemonsActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import styles from "./Pokemon.module.css";

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector((state:any) => state.pokemonMultipleReducer);
    React.useEffect(() => {
        dispatch(getPokemon(pokemonName));
    }, []);
    
    const showPokemon = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
        const pokemonData = pokemonState.data[pokemonName];
            return (
                <div className={styles.pokemon_wrapper}>
                    <div className={styles.pokemon}>
                        <h1 className={styles.headers}>Sprites:</h1>
                        <img src={pokemonData.sprites.front_default} alt="" />
                        <img src={pokemonData.sprites.back_default} alt="" />
                        <img src={pokemonData.sprites.front_shiny} alt="" />
                        <img src={pokemonData.sprites.back_shiny} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.headers}>Stats:</h1>
                        {pokemonData.stats.map((element, index) => {
                            return <span className={styles.stats} key={index}>{element.stat.name} : {element.base_stat}</span>
                        })}
                    </div>
                    <div>
                        <h1 className={styles.headers}>Abilities:</h1>
                        {pokemonData.abilities.map((element, index) => {
                            return <span className={styles.stats} key={index}>{element.ability.name}</span>
                        })}
                    </div>
                </div>
            )
        }

        if (pokemonState.loading) {
            return <span>Loading...</span>
        }

        if (pokemonState.error !== '') {
            return <span>{pokemonState.error}</span>
        }

        return <span>error getting pokemon</span>
        
    };

    return (
        <div>
            <h1>{pokemonName.toUpperCase()}</h1>
            {showPokemon()}
        </div>
    )
};

export default Pokemon;