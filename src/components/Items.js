import React from 'react';



function Items({name,bag,price,discper,discount}){
    return(
        <div class="container-fluid, card" >
             <img src={bag} class="card-img-top" alt="Bag one"/>
                <div class=" card-body">
                     <h5 class="card-title">{name}</h5>
                     <p>1pc(s)</p>
                     <h6 style={{color:"orange"}}><s>{discount}</s></h6>
                     <h5 style={{color:"green"}}>{price} 
                         <span style={{paddingLeft:"10px"}}> <button type="button" class="btn btn-light-success"> <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                         </svg> Cart</button></span> 
                    </h5>
                
                </div>        
                    
                

                <div style={{position:"absolute", backgroundColor:"orange", top:7,color:"white", marginLeft: "150px", borderRadius: "20%", textAlign:"center" }}>
                    <h6 style={{padding: "5px 5px 0px 5px"}}>{discper}</h6>
                </div>
        </div>
    )
}

export default Items;