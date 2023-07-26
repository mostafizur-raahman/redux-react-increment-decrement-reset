import { DECREMRNT, INCREMENT, RESET } from "../constants/constant";

const intitialCounter = {
    count: 0,
};
export const counterReducer = (state = intitialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMRNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};
