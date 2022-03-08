import React from 'react';
import UpdatedComponent from './MyHoc'
function Counter2(props){
  const{count,handle}=props;
return <>
   <h2 onMouseOver={handle}> Hovered {count} times  </h2>    
</>
}
export default UpdatedComponent(Counter2);