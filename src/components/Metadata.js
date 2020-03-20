import React from "react";
import './Metadata.css'
import { connect } from 'react-redux';
function Metadata({ metadata }) {             //rendering metadata for Movies
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
const mapStateToProps = state => ({         //mapping metadata state to props
    metadata: state.metadata
})
const mapDispatchToProps = dispatch => ({   //mapping actions to props
    filterData: (payload) => dispatch({ type: 'UPDATE_FILTER', payload })
})
export default connect(mapStateToProps, mapDispatchToProps)(Metadata);