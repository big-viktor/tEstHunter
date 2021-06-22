import React, { useCallback } from 'react';
import HoverImage from "react-hover-image";
import './category.css';
import Icon from '../../img/image.svg.png';
import Icon2 from '../../img/image.svg (1).png'



 const Category = () => {
    
    function ChangeImage(id,image){
var el=document.getElementById(id);
el.src=image;
}
    return (
      <>
       <div className="category-container">
           <div className="categoty-container-text">
               <button className="category-text">Категория 3</button>
               <button className="category-text">Категория 4</button>
               <button className="category-text">Категория 5</button>
           </div>
           <div>
               <div className="content-grid">
               <div className="content-border-img-category">
                   <HoverImage className="img-category" src={Icon} alt="Loading" hoverSrc={Icon2} /> 
               </div>
               <div className="content-border-img-category1"> 
                    <HoverImage className="img-category" src={Icon} alt="Loading" hoverSrc={Icon2} /> 
               </div>
               <div className="content-border-img-category2"> 
                    <HoverImage className="img-category" src={Icon} alt="Loading" hoverSrc={Icon2} /> 
               </div>
               </div>
               
           </div>
       </div>
      </>
    );
  };
  


export default Category;