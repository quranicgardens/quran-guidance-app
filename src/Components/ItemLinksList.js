// import { useState,createContext, useContext } from "react";
import { getLangResource } from "../Helper/Utils";
import ItemLink from "./ItemLink";




function ItemLinksList(props){
  // const user = useContext(UserContext);
return (
  <div className="container my-5">
        <section class="hero-section text-center">
        <div class="container">
            <h1>Welcome to the Holy Quran</h1>
            <p class="lead">Discover the wisdom, guidance, and beauty of the Quran.</p>
            <a href="#about" class="btn btn-primary btn-lg">{getLangResource("learnMore")}</a>
        </div>
    </section>
    <section id="about" class="py-5">
        <div class="container text-center">
            <h2>About the Quran</h2>
            <p class="lead">The Quran is the central religious text of Islam, believed to be a revelation from God. It is widely regarded as the finest work in classical Arabic literature.</p>
            <p>Explore its chapters, teachings, and how it has guided millions across the globe for centuries.</p>
        </div>
    </section>
    <section class="bg-light py-5">
        <div class="container text-center">
            <h2>Features of Our Quran Platform</h2>
            <div class="row">
                <div class="col-md-4">
                    <h4>Quran Translation</h4>
                    <p>Read the Quran in multiple languages with accurate translations.</p>
                </div>
                <div class="col-md-4">
                    <h4>Audio Recitations</h4>
                    <p>Listen to beautiful recitations by renowned Qaris.</p>
                </div>
                <div class="col-md-4">
                    <h4>Downloadable Content</h4>
                    <p>Access free downloadable PDFs and eBooks of the Quran.</p>
                </div>
            </div>
        </div>
    </section>
  <div  className="row g-3">
{Array.from(props.data).map((itemLink,index)=>{
return (

<ItemLink dataObject={itemLink} key={index}/>

)



})
  
}

    </div>

 </div>
)
}

export default ItemLinksList;