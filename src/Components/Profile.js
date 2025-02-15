import { useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
function Profile(){
    const [selectedContact, setselectedContact] = useState(null);
    const params = useParams();
    let userId=params.id;
 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/"+userId)
        .then(response => response.json())
        .then(data => setselectedContact(data))
       
      },[userId])
      
   if (selectedContact!=null) {return (

 <div  className="card mx-auto">

<img className="img-thumbnail d-blcok mx-auto" src="https://cdn1.iconfinder.com/data/icons/office-and-internet-3/49/248-512.png" style={{width:"350px",backgroundColor:"red"}} />
<div className="card-body text-center">
    <h4 className="card-title"> {selectedContact.name}</h4>
    <p className="card-text">{selectedContact.email}</p>
    <p className="card-text">{selectedContact.address.city}</p>
    <p className="card-text">{selectedContact.phone}</p>

</div>


</div>

     
    )}}


export default Profile;