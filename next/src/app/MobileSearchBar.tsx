import "../app/globals.css"
import location from "../../public/images/location.svg"
import person from "../../public/images/person.svg"
import searchIcon from "../../public/images/search icon.svg"

interface SearchOptionInterface {
    iconSrc: string;
    text: string;
    iconWidth: string; // Tailwind width class like "w-[10%]"
}



const MobileSearchBar: React.FC =  () => {
    return (
        <div style={{fontFamily:"Montserrat", fontWeight:500}} className= "flex grid grid-rows-3 gap-[2.0vw] p-[4vw] m-[10vw] border text-[3.7vw] text-[#333333] bg-white rounded-[3vw] text-[3.20vw]">
            <div  className="flex border border-black rounded-[3vw] p-[2vw] justify-left items-center">
                {/* Box 1 */}
                <div className="flex items-center w-[10vw]">
                    <img src={searchIcon.src} className="flex w-[6.0vw] mx-[2vw]  flex-shrink-0">
                    </img>
                </div>
                <div className="flex content-center underline underline-offset-[1.2vw] decoration-[#333333]">
                        Search by keyword 
                </div>
            </div>
            <div className="flex border border-black rounded-[3vw] p-[2vw] justify-left items-center">
                <div className="flex justify-center w-[10vw]">
                    <img src={location.src} className="flex w-[4.4vw] mx-[2vw]  flex-shrink-0">
                    </img>      
                </div>
                <div className="flex content-center  underline underline-offset-[1.2vw] decoration-[#333333]">
                    Search by location 
                </div>
            </div>
            <div className="flex border border-black rounded-[3vw] p-[2vw] justify-left items-center">
                <div className="flex justify-center w-[10vw]">
                    <img src={person.src} className="flex w-[4.0vw] mx-[2vw]">
                    </img> 
                </div> 
                <div className="flex content-center  underline underline-offset-[1.2vw] decoration-[#333333]">
                    Search by role  
                </div>
            </div>
            <div className="flex bg-[#023A22] p-[3vw] text-white justify-center border rounded-[18.0vw]">
                Search
            </div>
        </div>
    );
    
} 

  
export default MobileSearchBar