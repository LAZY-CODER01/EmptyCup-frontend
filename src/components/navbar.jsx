
import { useDispatch,useSelector } from "react-redux"
import { toggleShortlist } from "../features/shortlist/shortlistslice"
import { sorttheorder } from "../features/sortorder/sortorderslice";
export default function MainNavbar(){
    

const dispatch=useDispatch();
const ShortlistToggleValue=useSelector(state=>state.shortlist);

const handleToggle =()=>{
    dispatch(toggleShortlist());
}

const handlesort = ()=>{
dispatch(sorttheorder())
}

return (
    <div className="flex  items-center flex-col">

<div className="w-full md:justify-evenly  justify-around px-2 mt-4 flex flex-row">

<img src="public/images/logo.png" className="h-[32px]" alt="" />
<p className="text-[#716966] font-bold  text-2xl ">EmptyCup</p>

<div className="flex justify-center  items-center">
    <svg width="7" height="23" viewBox="0 0 7 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.03125 19.9375C6.03125 20.6088 5.76457 21.2527 5.28986 21.7274C4.81516 22.2021 4.17133 22.4688 3.5 22.4688C2.82867 22.4688 2.18484 22.2021 1.71014 21.7274C1.23543 21.2527 0.96875 20.6088 0.96875 19.9375C0.96875 19.2662 1.23543 18.6223 1.71014 18.1476C2.18484 17.6729 2.82867 17.4062 3.5 17.4062C4.17133 17.4062 4.81516 17.6729 5.28986 18.1476C5.76457 18.6223 6.03125 19.2662 6.03125 19.9375ZM6.03125 11.5C6.03125 12.1713 5.76457 12.8152 5.28986 13.2899C4.81516 13.7646 4.17133 14.0312 3.5 14.0312C2.82867 14.0312 2.18484 13.7646 1.71014 13.2899C1.23543 12.8152 0.96875 12.1713 0.96875 11.5C0.96875 10.8287 1.23543 10.1848 1.71014 9.71014C2.18484 9.23543 2.82867 8.96875 3.5 8.96875C4.17133 8.96875 4.81516 9.23543 5.28986 9.71014C5.76457 10.1848 6.03125 10.8287 6.03125 11.5ZM6.03125 3.0625C6.03125 3.73383 5.76457 4.37766 5.28986 4.85236C4.81516 5.32707 4.17133 5.59375 3.5 5.59375C2.82867 5.59375 2.18484 5.32707 1.71014 4.85236C1.23543 4.37766 0.96875 3.73383 0.96875 3.0625C0.96875 2.39117 1.23543 1.74734 1.71014 1.27264C2.18484 0.797935 2.82867 0.53125 3.5 0.53125C4.17133 0.53125 4.81516 0.797935 5.28986 1.27264C5.76457 1.74734 6.03125 2.39117 6.03125 3.0625Z" fill="#3A312E"/>
</svg>
</div>


</div>

<svg
  className="mt-4 w-full"
  height="2"
  viewBox="0 0 100 2"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line x1="0" y1="1" x2="100" y2="1" stroke="#D0D0D0" strokeWidth="0.25" />
</svg>


         <div className="
    text-[#D0D0D0]
    py-4 w-full flex items-center justify-around ">

<div className=" flex items-center self-start space-x-4 ">

<div className="flex flex-col items-center  space-y-2">
    <img src="public/images/Contact.png" className="
    h-[20px]
    active:scale-105

    "  alt="" />
    <p className=" md:text-sm text-[10px]  text-center ">Contact</p>
</div>


<div className="flex flex-col items-center  space-y-2">
<img src="public/images/Gallery.png"  
className="
    h-[20px]
    active:scale-105

    "
alt="" />
    <p className=" md:text-sm text-[10px] text-center ">Gallery</p>
</div>

<div className="flex flex-col items-center  space-y-2">
    <img src="public/images/Map.png" 
    className="
    h-[20px]
    active:scale-105

    "
    alt="" />

    <p className=" md:text-sm text-[10px] text-center ">Map</p>
</div>





</div>

<div className=" flex  items-center self-end space-x-4 ">



<div className="flex self-end flex-col items-center   space-y-2"

>


    <svg  viewBox="0 0 29 28" 

    fill={ShortlistToggleValue ? "#E0A64E" : "none"} 
    
                className=" h-[20px] active:scale-105 transition-colors duration-300"
    onClick={handleToggle}

    xmlns="http://www.w3.org/2000/svg">



<path  d="M9.0625 2.625C9.0625 1.92881 9.34894 1.26113 9.8588 0.768845C10.3687 0.276562 11.0602 0 11.7812 0L17.2188 0C17.9398 0 18.6313 0.276562 19.1412 0.768845C19.6511 1.26113 19.9375 1.92881 19.9375 2.625V4.375C19.9375 5.07119 19.6511 5.73887 19.1412 6.23116C18.6313 6.72344 17.9398 7 17.2188 7H11.7812C11.0602 7 10.3687 6.72344 9.8588 6.23116C9.34894 5.73887 9.0625 5.07119 9.0625 4.375V2.625ZM18.125 2.625C18.125 2.39294 18.0295 2.17038 17.8596 2.00628C17.6896 1.84219 17.4591 1.75 17.2188 1.75H11.7812C11.5409 1.75 11.3104 1.84219 11.1404 2.00628C10.9705 2.17038 10.875 2.39294 10.875 2.625V4.375C10.875 4.60706 10.9705 4.82962 11.1404 4.99372C11.3104 5.15781 11.5409 5.25 11.7812 5.25H17.2188C17.4591 5.25 17.6896 5.15781 17.8596 4.99372C18.0295 4.82962 18.125 4.60706 18.125 4.375V2.625Z" 
    fill={ShortlistToggleValue ? "#E0A64E" : "#3A312E"} 

/>
<path d="M5.4375 2.625H7.25V4.375H5.4375C4.95679 4.375 4.49578 4.55937 4.15587 4.88756C3.81596 5.21575 3.625 5.66087 3.625 6.125V24.5C3.625 24.9641 3.81596 25.4092 4.15587 25.7374C4.49578 26.0656 4.95679 26.25 5.4375 26.25H23.5625C24.0432 26.25 24.5042 26.0656 24.8441 25.7374C25.184 25.4092 25.375 24.9641 25.375 24.5V6.125C25.375 5.66087 25.184 5.21575 24.8441 4.88756C24.5042 4.55937 24.0432 4.375 23.5625 4.375H21.75V2.625H23.5625C24.5239 2.625 25.4459 2.99375 26.1258 3.65013C26.8056 4.3065 27.1875 5.19674 27.1875 6.125V24.5C27.1875 25.4283 26.8056 26.3185 26.1258 26.9749C25.4459 27.6313 24.5239 28 23.5625 28H5.4375C4.47609 28 3.55406 27.6313 2.87424 26.9749C2.19442 26.3185 1.8125 25.4283 1.8125 24.5V6.125C1.8125 5.19674 2.19442 4.3065 2.87424 3.65013C3.55406 2.99375 4.47609 2.625 5.4375 2.625Z" 
    fill={ShortlistToggleValue ? "#E0A64E" : "#3A312E"} 

/>
<path d="M14.5 12.2184C17.516 9.29067 25.0578 14.4129 14.5 20.9999C3.94218 14.4129 11.484 9.29242 14.5 12.2184Z"
    fill={ShortlistToggleValue ? "#E0A64E" : "#3A312E"} 

/>
</svg>
   

    <p className= {`md:text-sm text-[10px] text-center 
    
    ${ShortlistToggleValue?'text-[#E0A64E]':'text-[#D0D0D0]'}
    
    `}>Shortlist</p>
</div>

<div className="flex flex-col items-center   space-y-2">
<img src="public/images/Sort.png" 
className="
active:scale-105
    h-[20px]
    "
onClick={handlesort}
alt="" />

    <p className=" md:text-sm text-[10px] text-center ">Sort</p>
</div>






</div>

    </div>

  
    </div>
   
)



}