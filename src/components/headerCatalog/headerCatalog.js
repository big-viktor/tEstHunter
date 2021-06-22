import React from 'react';
import Active from '../../img/1 - active (1).png'
import Active2 from '../../img/2.png'
import Active3 from '../../img/3.png'

import './headerCatalog.css';


 const HeaderCatalog = () => {
   
    return (
      <>
       <div className="header-catalog-container">
           <div className="header-catalog-content">
               <div className="content-btn">
               <button className="btn-navigation"><img src={Active} alt="#"/></button>
               </div>
               <div className="content-btn">
               <button className="btn-navigation"><img src={Active2} alt="#"/></button>
               </div>
               <div className="content-btn">
               <button className="btn-navigation"><img src={Active3} alt="#"/></button>
               </div>
           </div>
       </div>
      </>
    );
  };
  


export default HeaderCatalog;