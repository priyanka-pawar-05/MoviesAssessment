import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Poster.scss'
import actions from "../actions";

const Poster = () => {                               //rendering posters for Movies
    const poster = useSelector(
        state => state.poster
    );
    const dispatch = useDispatch();
    return (
        <div className="poster_wrapper">
            {poster.map(item => <div className='card' key={item.id}>
                <img src={item.imageUrl}
                    onClick={() =>
                        dispatch({ type: actions.UPDATE_METADATA, payload: item })} 
                    alt='card' />
            </div>)}
        </div>
    );
}

export default Poster;