import axios from "axios";

// possible actions to manipulate state - action types
export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const NEW_SMURF = "NEW_SMURF";

// action creators - sends to reducer
export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data, ' is res.data in axios call')
        dispatch({ type: UPDATE_DATA, payload: res.data })
    })
    .catch(err => console.log('error fetching data from api. err: ', err));
};


export const updateData = () => dispatch => {
    dispatch({ type: UPDATE_DATA });
    axios.post('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res, ' is response in axios post')
        dispatch({ type: UPDATE_DATA, payload: res.data })
    })
    .catch(err => {
        console.log('ERROR: ', err)
    })
}

export const newSmurf = (name) => dispatch => {
    dispatch({ type: NEW_SMURF, payload: name });
}