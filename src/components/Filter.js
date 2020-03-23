import React, { useCallback } from "react";
import './Filter.scss'
import { useSelector, useDispatch } from 'react-redux';
import actions from "../actions";

const Filter = () => {                              //rendering data for Filter buttons
    const filter = useSelector(
        state => state.filter
    );
    const dispatch = useDispatch();
    const updateFilter = useCallback(
        (item) => dispatch({ type: actions.UPDATE_FILTER, payload: { filterOption: item.valueToOrderBy } }),
        [dispatch]
       )
    return (
        <div className="filter_wrapper">
            <div className="filter_title">FILTER BY : </div>
            {filter.map(item => 
            <div className={["filter_button", item.active ? 'active' : ''].join(' ')} key={item.label}
                onClick={() => 
                    updateFilter(item)
                  }>
                <div>{item.label}</div>
            </div>)}
        </div>
    );
}

export default Filter;