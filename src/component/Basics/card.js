import React from 'react'


const Card = ({menuData,cat}) => 
{
    return (
        <>
        <div className="main-card--cointainer">
        {menuData.map((curElem) =>{
            if(cat===curElem.category || cat==="All")
            {
                return(
                
                    <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">
                                {curElem.id}
                            </span>
                            <span className="card-author subtle">
                            {curElem.category}
                            </span>
                            <h2 className="card-title">{curElem.name}</h2>
                            <span className="card-description subtle">
                            {curElem.description}
                                </span>
                            <div className="card-read">Read</div>
                            <img src={curElem.image} alt="image" className="card-media" />
                            <span className="card-tag subtle"> order now</span>
                        </div>
                    </div>
                </div>
               
                );
            }
        })}
    </div>
    </>
    );
}

export default Card;