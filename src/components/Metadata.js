import React from "react";
import './Metadata.scss'
import { useSelector } from 'react-redux';

const Metadata = () => {                              //rendering metadata for Movies
    const metadata = useSelector(
        state => state.metadata
    );
    if (!metadata.title) return null
    return (
        <div className="metadata_wrapper">
            <div className="movie_title">{metadata.title}</div>
            <div className="movie_synopsis">{metadata.synopsis}</div>
            <div className="release_year">
                <span>Release year : </span>
                <div >{metadata.releaseDate}</div>
            </div>
            <div className="movie_rank">
                <span>Rank : </span>
                <div >{metadata.rank}</div>
            </div>
        </div>
    );
}

export default Metadata;