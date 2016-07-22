
import {
	CHANGE_TEXT
} from '../Constants/actionTypes.js'

const initialState = {
    text : 'Hello world'
}

function Reducer(state=initialState, action) {
    switch(action.type) {
        case CHANGE_TEXT:
            return {
                text : 'Hello Stark'
            }
        default:
            return state;
    }
}

export default Reducer