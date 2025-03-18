import { Link } from "react-router-dom";
function getLinkTitle(link) {
   let isAr = false;

    let title = isAr ? link.titleAr : link.title;
    if (title?.trim().length == 0) {
        title = isAr ? "عرض التفاصيل" : "View Details";
    }
    return title;

}

function ItemLink(props) {
    return (
        <>
        <style jsx>{`
            .child-links {
                display: flex;
                justify-content: center;
                gap: 3px;
                align-items: center;
                flex-direction: column;
            }
        `}</style>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="card">
                <img class="img-thumbnail" src="Quran-item.jpg"
                // style={{width:"350px"}} 
                />
                <div class="card-body text-center">
                    <h4 class="card-title"> {props.dataObject.title}</h4>
                    {/* <p class="card-text">{props.dataObject.email}</p>
                <p class="card-text">{props.dataObject.address.city}</p> */}

                    {/* <Link to={props.dataObject.path} class="btn btn-primary">View Details</Link> */}
                    <div className="child-links" >
                    {props.dataObject.children.map((item, index) => (
                        
                            <Link to={item.path} key={index} className="btn btn-primary">
                                {getLinkTitle(item)}
                            </Link>
                            
                    ))}
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ItemLink;