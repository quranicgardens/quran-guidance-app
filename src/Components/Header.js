import { Link } from "react-router-dom";
import { handleLanguageChange, getSiteLang } from "../Helper/Utils";
let language=getSiteLang()
function AppHeader() {
  return (

    <header class="d-flex flex-wrap justify-content-center py-3 px-5 mb-4 border-bottom">
      <a href={window.Constants.BaseUrl} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">{window.Constants.AppName}</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        {/* {props.dataObject.children.map((item, index) => (
                                  
                                      <Link to={item.path} key={index} className="btn btn-primary">
                                          {getLinkTitle(item)}
                                      </Link>
                                      
                              ))} */}
                              
        {/* <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
          <li class="nav-item">  <Link to={`/add-contact`} class="nav-link">add contact</Link></li>
          <li class="nav-item"><Link to={`/login`} class="nav-link">login</Link></li> */}
      </ul>
      <br/>
      <div className="lang-switcher">
        <button
          className={`btn ${language === 'en' ? 'btn-light fw-bold' : 'btn-outline-light text-muted'}`}
          onClick={() => handleLanguageChange('en')}
        >
          EN
        </button>
        <button
          className={`btn ${language === 'ar' ? 'btn-light fw-bold' : 'btn-outline-light text-muted'}`}
          onClick={() => handleLanguageChange('ar')}
        >
          AR
        </button>
      </div>
    </header>
  )
}

export default AppHeader;