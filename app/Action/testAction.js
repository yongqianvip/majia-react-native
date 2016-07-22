
import {
	CHANGE_TEXT
} from '../Constants/actionTypes.js'

export function changeText(newText){
    return {
        type: 'CHANGE_TEXT',
        newText
    }
}