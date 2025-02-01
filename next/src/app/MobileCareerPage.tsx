'use client'

import { useState } from "react";
import MobileNavBar from "./MobileNavBar"
import MobileSidebar from "./MobileSidebar"
import CareersImage from "../app/assets/CareersImage.svg";
import MobileSearchBar from "./MobileSearchBar";
import Dropdown from "./components/Dropdown";
import JobList from "./components/JobList";
import MobileDropdown from "./MobileDropdown";

const MobileCareerPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }

    
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [selectedJob, setSelectedJob] = useState<any | null>(null); // New state to hold the selected job

    const closeAllDropdowns = () => {
        setOpenDropdown(null); // Close all dropdowns
      };
    
      const handleJobClick = (job: any) => {
        setSelectedJob(job); // Update state when a job is clicked
      };

    return(
        <div >
            <div className="absolute bg-white w-full h-full" style={{zIndex:-2}}></div>
            <MobileNavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
            <img src={CareersImage.src} className="absolute w-full" style={{zIndex:-2}}></img>
            <div className="py-[15vw]">
                <MobileSearchBar/>
            </div>
            {/* Box 1 */}
            <div className="mt-[20vw] justify-self-center bg-white rounded-lg  w-[65vw] h-[80vw]" style={{fontFamily: 'Montserrat'}}>
                <div className="px-[0vw] py-[1.5vw] mb-[5vw] text-black w-full flex flex-row justify-between items-center">
                    
                    <div className="text-[5vw]">Filters</div>
                    <div className="text-[3vw]">(Showing 4 results)</div>
                </div>
                <div className="flex grid grid-cols-2 text-white px-[vw] gap-[2vw] pb-[1.5vw] ">
                    <MobileDropdown
                    buttonText="Experience"
                    options={["None", "Entry-level", "1-2 years", "3+ years"]}
                    closeAllDropdowns={closeAllDropdowns}
                    />
                    <MobileDropdown
                    buttonText="Grade level"
                    options={["9th", "10th", "11th", "12th"]}
                    closeAllDropdowns={closeAllDropdowns}
                    />
                    <MobileDropdown
                    buttonText="Type"
                    options={["Volunteer", "Internship", "Part-time", "Full-time"]}
                    closeAllDropdowns={closeAllDropdowns}
                    />
                    <MobileDropdown
                    buttonText="Work site"
                    options={["Remote", "Hybrid", "On-site"]}
                    closeAllDropdowns={closeAllDropdowns}
                    />
                </div>
                <div className="flex flex-col h-full pb-[10vw]">
                    <JobList onJobClick={handleJobClick} selectedJob={selectedJob} /> {/* Pass selectedJob */}
                </div>
            </div>

            <MobileSidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
        </div>
    )
}

export default MobileCareerPage