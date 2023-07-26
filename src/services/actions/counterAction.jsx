import { DECREMRNT, INCREMENT, RESET } from "../constants/constant"

export const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMRNT,
    }
}
export const resetCounter = () => {
    return {
        type: RESET,
    }
}