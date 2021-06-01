import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import React from "react";
import { getCards } from "../../../app/actions/pokemonsActions";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";


const Cards = (props) => {
    const dispatch = useDispatch();
    const cards = useSelector((state:any) => state.cardsReducer);
    React.useEffect(() => {
        fetchCards(1);
    }, []);

    const fetchCards = (page = 1) => {
        dispatch(getCards(page));
    };

    const showCards = () => {
        console.log(cards.data);

        if (cards.loading) {
            return <span>Loading...</span>
        }
        
        if (!_.isEmpty(cards.data)) {
            return cards.data.map(element => {
                return (
                    <div className={styles.card_item}>
                        <span>{element.name}</span>
                        <Link to={`/pokemon/${element.name}`}>View</Link>
                    </div>
                )
            })
        }

        if (cards.error !== '') {
            return <span>{cards.error}</span>
        }

        return <span>impossible</span>
    }

    return (
        <div>
            {showCards()}
        </div>
    )
};

export default Cards;