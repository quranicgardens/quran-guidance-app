import { Link } from "react-router-dom";
import itemLinks from '../Data/AppItemLinks';
import { handleLanguageChange, getSiteLang ,getLinkTitle} from "../Helper/Utils";
let language=getSiteLang()
function AppHeader() {
  return (

    <header class="d-flex flex-wrap justify-content-center py-3 px-5 mb-4 border-bottom">
      <a href={window.Constants.BaseUrl} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">{window.Constants.AppName}</span>
      </a>

      {/* <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        {Array.from(itemLinks).map((item, index) => (
                                  
                                    <li className="nav-item">  <Link to={item.path} key={index} className="nav-link">
                                          {getLinkTitle(item)}
                                      </Link>
                                      </li>
                                      
                              ))}
       
          
      </ul> */}
                       
        {/* <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
          <li class="nav-item">  <Link to={`/add-contact`} class="nav-link">add contact</Link></li>
          <li class="nav-item"><Link to={`/login`} class="nav-link">login</Link></li> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand or Logo */}
        {/* <a className="navbar-brand" href="#">Brand</a> */}
        
        {/* Toggle button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Home link */}
            {/* <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">Home</a>
            </li> */}

            {/* Dynamically generated links */}
            {Array.from(itemLinks).map((item, index) => (
              <li className="nav-item" key={index}>
                <Link to={item.path} className="nav-link">
                  {getLinkTitle(item)}
                </Link>
              </li>
            ))}
            
            {/* Additional static links */}
            {/* <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><Link to={`/add-contact`} className="nav-link">Add Contact</Link></li>
            <li className="nav-item"><Link to={`/login`} className="nav-link">Login</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
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