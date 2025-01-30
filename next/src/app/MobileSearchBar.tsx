import "../app/globals.css"
import location from "../../public/images/location.svg"
import person from "../../public/images/person.svg"
import searchIcon from "../../public/images/search icon.svg"

interface SearchOptionInterface {
    iconSrc: string;
    text: string;
}

const SearchOption: React.FC<SearchOptionInterface> = ({iconSrc, text}) => {
    return(
        <div  className="flex border border-black rounded-[3vw] p-[2vw] justify-left items-center">
            <div className="flex items-center mr-[1vw] w-[10vw]">
                <img src={iconSrc} className="flex w-[6.0vw] mx-[2vw]  flex-shrink-0">
                </img>
            </div>
            <div className="flex content-center underline underline-offset-[1.2vw] decoration-[#333333]">
                    {text} 
            </div>
        </div>
    )
}



const MobileSearchBar: React.FC =  () => {
    return (
        <div style={{fontFamily:"Montserrat", fontWeight:500}} className= "flex grid grid-rows-3 gap-[2.0vw] p-[4vw] mx-[15vw] border text-[3.7vw] text-[#333333] bg-white rounded-[3vw] text-[3.20vw]">

            <SearchOption iconSrc={searchIcon.src} text="Search by keyword"/>
            <SearchOption iconSrc={location.src} text="Search by location"/>
            <SearchOption iconSrc={person.src} text="Search by role"/>   
            <div className="flex bg-[#023A22] p-[3vw] text-white justify-center border rounded-[18.0vw]">
                Search
            </div>
        </div>
    );
    
} 

  
export default MobileSearchBar