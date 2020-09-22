import React, { useState } from 'react' 


export default function Count(props) {
    

    const [count, setCount]=useState(1);

   function addClick() {
        setCount(count+1)
   }

   function minusClick() {
       count > 0 ? setCount(count-1) : setCount(0)
    
}

    
    
   return (
   <div className='counter'>
       <div >{count}</div>
       <div onClick={addClick}>Add Question</div>
       <div onClick={minusClick}>subtract Question</div>

       
   </div>
   )
}