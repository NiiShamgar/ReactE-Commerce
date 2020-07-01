import React from 'react';
import Items from './Items';
import bag1 from '../images/bag1.jpg';
import bag2 from '../images/bag2.jpg';
import bag3 from '../images/bag3.jpg';
import bag5 from '../images/bag5.jpg';
import bag6 from '../images/bag6.jpg';
import bag7 from '../images/bag70.jpg';
import bag8 from '../images/bag8.jpg';
import bag9 from '../images/bag90.jpg';


function Main(props){
    return(
        
        <div class="row">
            <div class="col-3">
                 <Items name="Gucci Bag" bag={bag3} price="¢150.00" discper="20%" discount="¢180.00"/>
            </div>
            
            <div class="col-3">
                 <Items name="Hand Bag" bag={bag5} price="¢60.00"  discper="50%" discount="¢120.00"/>
            </div>

            <div class="col-3">
                 <Items name="RoadTrip Bag" bag={bag2} price="¢160.00" discper="30%" discount="¢200.00"/>
            </div>
 
            <div class="col-3">
                 <Items name="Laptop Bag" bag={bag8} price="¢110.00" discper="50%" discount="¢220.00"/>
            </div>           
            
             <div class="col-3" style={{padding: "10px"}}>
                 <Items name="Shopping Bag" bag={bag7} price="¢40.00" discper="10%" discount="¢44.00"/>
            </div>

            <div class="col-3" style={{padding: "10px"}}>
                 <Items name="Laptop Bag" bag={bag6} price="¢120.00"  discper="25%" discount="¢150.00"/>
            </div>

            <div class="col-3" style={{padding: "10px"}}>
                 <Items name="School Bag" bag={bag9} price="¢95.00"  discper="50%" discount="¢190.00"/>
            </div>
            <div class="col-3"style={{padding: "10px"}}>
                 <Items name="Tech Bag" bag={bag1} price="¢119.00"  discper="85%" discount="¢140.00"/>
            </div>
            
            



        </div>
        
    )
}

export default Main;