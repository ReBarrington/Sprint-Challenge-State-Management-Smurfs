import { GET_DATA, UPDATE_DATA, NEW_SMURF } from "../actions/actions";


const initialState = {
    smurfs: [],
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
            }
        case UPDATE_DATA:
            return {
                ...state,
                smurfs: action.payload
            }
        case NEW_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        default: 
            return {
                ...state
            }
    }
}