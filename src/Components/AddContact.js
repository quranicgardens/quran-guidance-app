import { useState } from "react";

function AddContact(){
    const [isSubmitted, setisSubmitted] = useState(false);
    const [isNameInValid, setisNameInValid] = useState(false);

function save(event){
    event.preventDefault()
    const nameValue=event.target.elements.name.value;
const emailValue=event.target.elements.email.value;

if (nameValue.trim().length==0){
    setisNameInValid(true)
    return 
}
fetch("https://jsonplaceholder.typicode.com/users", {
             // Adding method type
             method: "POST",
             // Adding body or contents to send
             //new post(titleValue,bodyValue,userIdValue)
             body: JSON.stringify({
                 name: nameValue,
                 email: emailValue
                
             }),
              
             // Adding headers to the request
             headers: {
                 "Content-type": "application/json; charset=UTF-8"
             }
         })
          
         // Converting to JSON
         .then(()=>{setisSubmitted(true)
        
            event.target.elements.name.value=""
            event.target.elements.email.value=""
        })
         //.then(response => response.json())
          
         // Displaying results to console
         //.then(json => console.log(json));
        }


    return(<div class="container mb-7">
    {isSubmitted&& <div  class="alert alert-success text-center"> Submitted Successfully</div>}
    
        <form onSubmit={save}>
          <div class="form-group">
            <label for="name">name</label>
            <input type="text" class="form-control" placeholder="Enter name" name="name" />
            {isNameInValid&&<div className="alert-danger">name is required</div>}
          </div>
          <div class="form-group">
            <label for="mail">email</label>
            <input type="text" class="form-control" placeholder="Enter your email" name="email"/>
          </div>
         
          <button  type="submit" class="btn btn-primary mx-auto d-block">register</button>
        </form>
        </div>)
}
export default AddContact;