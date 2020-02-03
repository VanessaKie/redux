import React from 'react';

const DisplayReducer = (state = '', action) => {
    switch (action.type){
        case 'DISPLAY':
            return state = action.display
            default:
                return state
    }
}

export default DisplayReducer;