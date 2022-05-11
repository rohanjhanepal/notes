import React from 'react'

const EffectHook = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
       document.title = `${count} times`;
    });

    return (
        <>
          <div className="center_div">
            <p>{count}</p>
            <div class="button2" onClick={() => setCount(count + 1)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              +
            </div>
           
          </div>
        </>
      );
}

export default EffectHook