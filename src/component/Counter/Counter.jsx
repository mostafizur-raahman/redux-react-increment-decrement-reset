import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../../services/actions/counterAction";


const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    console.log(count);
    const handleIncrement = () => {
        dispatch(incrementCounter());
    };
    const handleDecrement = () => {
        dispatch(decrementCounter());
    };
    const handleReset = ()=>{
        dispatch(resetCounter());
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Increment</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;
