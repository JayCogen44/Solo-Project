/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const getWeather = city => (dispatch) =>  {
    fetch('/api/weather', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({city})
    }).then(res=>res.json())
    .then(resp=>JSON.parse(resp))
    .then(jsonData => {
        dispatch({
            type: types.LOAD_WEATHER,
            payload: jsonData,
          });
    });
}

export const updateCurrentCity = data => ({
    type: types.UPDATE_CITY,
    payload: data,
});