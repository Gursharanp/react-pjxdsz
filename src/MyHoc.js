import React from 'react';

const UpdatedComponent= (OriginalComponent)=>{
    function NewComponent(){
      const[count,setCount]=React.useState(0);
       const handleFun=()=>{
         setCount(count+1);
       }
      return <OriginalComponent count={count} handle={handleFun}/>
    }
    return NewComponent;
}

export default UpdatedComponent;