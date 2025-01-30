'use client'

import Image from "next/image";
import "../../app/globals.css"
import { useState } from "react";
import MobileNavBar from "../MobileNavBar";
import MobileSidebar from "../MobileSidebar";

const PortalPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }

    return(
        <div>
            <div className="absolute bg-white w-full h-full" style={{zIndex:-2}}></div>
            <MobileNavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
            <MobileSidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
        </div>
    )
} 

export default PortalPage