// import { useState,createContext, useContext } from "react";
import ContactItem from "./ContactItem";


function AppContactsList(props){
  // const user = useContext(UserContext);
return (
  <div className="container my-5">
        
  <div  className="row g-3">
{Array.from(props.data).map((contact,index)=>{
return (

<ContactItem dataObject={contact} key={index}/>

)



})
  
}

    </div>

 </div>
)
}

export default AppContactsList;