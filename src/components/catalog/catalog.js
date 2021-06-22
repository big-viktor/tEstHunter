import React from 'react';
import './catalog.css';
import HeaderCatalog from './../headerCatalog/headerCatalog';
import Card from './../card/card';
import Category from './../category/category';


 const Catalog = () => {
   
    return (
      <>
       <div className="catalog-container">
           <div className="catalog-content">
             <HeaderCatalog/>
             <Card/>
             <Category/>
           </div>
       </div>
      </>
    );
  };
  


export default Catalog;