import React from 'react';
import UpdatedComponent from './MyHoc'
function Counter1(props){

   const{count,handle}=props;
return <>
       {count}
   <button onClick={handle}>click-me</button>
</>
}

export default UpdatedComponent(Counter1);