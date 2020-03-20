import React from "react";
import './Filter.css'
import { connect } from 'react-redux';
import actions from "../actions";

function Filter({ filter, sortMovie }) {                 //rendering data for Filter buttons
    return (
        <div className="filter_wrapper">
            <div className="filter_title">FILTER BY : </div>
            {filter.map(item => 
            <div className={["filter_button", item.active ? 'active' : ''].join(' ')} key={item.label}
                onClick={() => {
                    sortMovie({ filterOption: item.valueToOrderBy })
                }}>
                <div>{item.label}</div>
            </div>)}
        </div>
    );
}

const mapStateToProps = state => ({               //mapping filter state to props
    filter: state.filter
})
const mapDispatchToProps = dispatch => ({         //mapping actions to props
    sortMovie: (payload) => dispatch({ type: actions.UPDATE_FILTER, payload })
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);