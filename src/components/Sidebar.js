import React from 'react';
import SidebarItem from './SidebarItem';

function Sidebar(props) {
    return (
        
        <div>
            <SidebarItem category="Purse" icons="bag"/>
            <SidebarItem category="Hand Bags"/>
            <SidebarItem category="Shoulder Bags"/>
            <SidebarItem category="School Bag"/>
            <SidebarItem category="Laptop Bags"/>
        </div>

       

    )
}

export default Sidebar;