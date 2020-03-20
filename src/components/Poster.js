import React from "react";
import { connect } from 'react-redux';
import './Poster.css'
import actions from "../actions";
function Poster({ poster, updateInfo }) {              //rendering posters for Movies
    return (
        <div className="poster_wrapper">
            {poster.map(item => <div className='card' key={item.id}>
                <img src={item.imageUrl}
                    onClick={() => updateInfo(item)} alt='card' />
            </div>)}
        </div>
    );
}
const mapStateToProps = state => ({                                                  //mapping poster state to props
    poster: state.poster
})
const mapDispatchToProps = dispatch => ({                                            //mapping actions to props
    updateInfo: (payload) => dispatch({ type: actions.UPDATE_METADATA, payload })
})
export default connect(mapStateToProps, mapDispatchToProps)(Poster);