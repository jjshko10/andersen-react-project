import { fetchCardsError, fetchCardsRequest, fetchCardsSuccess } from "../../app/actions/fetchActions";

const Cards = (props) => {

    if (props.isRender) {
    const getCards = async () => {
        const api = await fetch('https://pokeapi.co/api/v2/pokemon');
        const content = await api.json();
        const pokemons = content.results;
        console.log(pokemons);
        return pokemons;
    };    
    getCards()
}



    /* if (props.isRender) {
        return (dispatch) => {
            dispatch(fetchCardsRequest());
                return getCards().then(([response, json]) => {
                    if(response.status === 200) {
                        dispatch(fetchCardsSuccess(json))
                    }
                    else {
                        dispatch(fetchCardsError())
                    }
                })
        };
    } */

    return (
        <div>
            {props.isRender
                ?
                    <div>
                        <h1>Render</h1>
                    </div>
                :
                    <div>
                        <h1>Hello</h1>
                    </div>
            }
        </div>
    )
};

export default Cards;