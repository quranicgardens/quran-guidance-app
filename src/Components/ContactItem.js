import { Link } from "react-router-dom";

function ContactItem(props){
      return(
        <div className="col-4">
        <div  class="card">
            <img class="img-thumbnail" src="https://cdn1.iconfinder.com/data/icons/office-and-internet-3/49/248-512.png" style={{width:"350px"}} />
            <div class="card-body text-center">
                <h4 class="card-title"> {props.dataObject.name }</h4>
                <p class="card-text">{props.dataObject.email}</p>
                <p class="card-text">{props.dataObject.address.city}</p>
                <Link to={`/profile/${props.dataObject.id}`} class="btn btn-primary">contact profile</Link>
            </div>
        </div>
        </div>
        
        )
}
export default ContactItem;