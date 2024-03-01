import React, {useState,useEffect,useRef} from 'react';

function MyComponent(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
    }
   

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
    }
   

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
    }
   

    function handleClick4(){
        inputRef4.current.focus();
        inputRef4.current.style.backgroundColor = "yellow";
    }
   
   return(
        <div>
            <button onClick={handleClick1}>
                Click Me!
            </button><input ref={inputRef1}/>

            <button onClick={handleClick2}>
                Click Me!
            </button><input ref={inputRef2}/>

            <button onClick={handleClick3}>
                Click Me!
            </button><input ref={inputRef3}/>

            <button onClick={handleClick4}>
                Click Me!
            </button><input ref={inputRef4}/>
        </div>);
}

export default MyComponent