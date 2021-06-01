import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import React, { useState } from "react";
import { getCards } from "app/actions/pokemonsActions";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
import ReactPaginate from "react-paginate";

const Cards = (props) => {
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();
    const cards = useSelector((state:any) => state.cardsReducer);
    React.useEffect(() => {
        fetchCards(1);
    }, []);

    const fetchCards = (page = 1) => {
        dispatch(getCards(page));
    };

    const showCards = () => {

        if (cards.loading) {
            return <span>Loading...</span>
        }
        
        if (!_.isEmpty(cards.data)) {
            return (
                <div className={styles.wrapper}>
                    {cards.data.map(element => {
                        return (
                            <div className={styles.card_item} /* key={} */>
                                <span>{element.name}</span>
                                <Link to={`/pokemon/${element.name}`} className={styles.view}>View</Link>
                            </div>
                        )
                    })}
                </div>
            )
        }

        if (cards.error !== '') {
            return <span>{cards.error}</span>
        }

        return <span>impossible</span>
    }

    return (
        <div>
            <h1>Search</h1>
                <input
                    type="text"
                    placeholder="Enter pokemon's name"
                    className={styles.search__input}
                    onChange={event => setSearch(event.target.value)}
                />
            <button
                className={styles.button}
                onClick={() => props.history.push(`/pokemon/${search}`)}
            >
            Go
            </button>
            {showCards()}
            {!_.isEmpty(cards.data) && (
                <ReactPaginate
                    containerClassName={styles.pagination}
                    pageCount={Math.ceil(cards.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={page => fetchCards(page.selected + 1)}
                />
            )}
        </div>
    )
};

export default Cards;