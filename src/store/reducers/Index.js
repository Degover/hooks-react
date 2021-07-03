export function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        case 'numberMultiplyBy7':
                return { ...state, number: state.number * 7 }
        case 'numberDivideBy25':
            return { ...state, number: state.number / 25 }
        case 'numberParseInt':
            return { ...state, number: parseInt(Math.floor(state.number)) }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default: return state;
    }
};