import React from 'react'


const reducer = (state,action) => 
{
    if(action.type === "INCR")
    {
        return state + 1;
    }
    else{
        return state > 0 ? (state - 1) : 0;
    }
}

const ReducerHooks = () => {
    //const [count, setCount] = React.useState(0);

    const [state,dispatch] = React.useReducer(reducer,0);

    return (
        <>
          <div className="center_div">
            <p>{state}</p>
            <div class="button2" onClick={() => dispatch({type:"INCR"})}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              +
            </div>
            <div
              class="button2"
              onClick={() => dispatch({type:"DECR"})}
             >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
             -
            </div>
          </div>
        </>
      );
}

export default ReducerHooks