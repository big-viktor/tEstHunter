import React, { useCallback }  from 'react';
import './card.css';
import Tanks from '../../img/2 (1).png'


 const Card = () => {
    const item2 = [1, 2, 3, 4, 5, 6, 7, 8];
    const renderItem2 = useCallback(() => <div className="border-content">2</div>, []);

    const item = [1, 2, 3, 4];
    const renderItem = useCallback(() => <div className="border-content">1</div>, [])
  
    
  
    return (
      <>
       <div className="card-conatiner">
           <div className="container-border-card">
           {item.map(() => renderItem())}
           </div>
           <div>
            <img src={Tanks} alt="#" className="card-img" />
           </div>
           <div className="container-border-card-two">
           {item2.map(() => renderItem2())}
           </div>
       </div>
      </>
    );
  };
  


export default Card;