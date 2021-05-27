
const Cards = () => {

    const getCards = async () => {
        const api = await fetch('https://pokeapi.co/api/v2/pokemon');
        const content = await api.json();
        const cards = content.results;
        return cards;
    };
    
    return (<div></div>)
};

export default Cards;