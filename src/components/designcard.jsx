

/* eslint-disable react/prop-types */

import { useSelector,useDispatch } from "react-redux";

import { toggleshortlistmain } from "../features/shorlisteditems/shortlisteditemsslice";
import { toggleShortlist } from "../features/shortlist/shortlistslice";
import Stars from "./stars";
export function DesignerCard({designer,index}){



const found = Boolean(useSelector(state=>state.shortlistitem.items.find(item=>item.id==designer.id)))

const dispatch=useDispatch();
const handleshortlist =()=>{

  dispatch(toggleshortlistmain(designer));
dispatch(toggleShortlist );
}


    return (
<div className={`py-8 md:px-4  ${index%2==0?'bg-[#FFFCF2]':'bg-[#fff]'} font-chivo   md:space-x-8 flex w-full `}  >

<div className={`px-8  flex flex-col space-y-4  w-[72%] `  } >

<p className="font-bold text-lg">{designer.name}</p>
<Stars stars={designer.rating} />

<p className="md:text-sm font-medium text-clip text-[10px]">{designer.description}</p>

<div className=" flex flex-row justify-around text-center  space-x-2">
 
          <div className="" >
            <p className="font-extrabold">{designer.stats.projects}</p>
            <div className="text-xs font-semibold">Projects</div>
          </div>
<div className="" >
            <p className="font-extrabold">{designer.stats.years}</p>
            <div className="text-xs font-semibold">Years</div>
          </div>

<div className="" >
            <p className="font-extrabold">{designer.stats.priceTier}</p>
            <div className="text-xs font-semibold">Price</div>
          </div>


</div>

   {designer.contacts.map((contact, idx) => (
          <p key={designer.id} className=" font-[400] text-sm">{contact}</p>
        ))}

</div>

<img src="/images/line.png" alt="" />

<div className=" px-4 flex flex-col items-center justify-center space-y-4 ">

<div className="flex flex-col items-center  space-y-2">
    <img src="/images/details.png" className="lg:h-[31px]
    h-[20px]
    active:scale-105

    "  alt="" />
    <p className=" md:text-sm text-[10px]  text-center ">details</p>
</div>


<div className="flex flex-col items-center  space-y-2">

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_12_497)">
<path d="M16.6988 14.0475C18.825 12.15 20 10 20 10C20 10 16.25 3.125 10 3.125C8.7995 3.12913 7.61258 3.37928 6.51251 3.86L7.47501 4.82375C8.28431 4.52894 9.1387 4.3771 10 4.375C12.65 4.375 14.8488 5.835 16.46 7.44625C17.2355 8.22586 17.9306 9.08141 18.535 10C18.4625 10.1087 18.3825 10.2288 18.2913 10.36C17.8725 10.96 17.2538 11.76 16.46 12.5538C16.2538 12.76 16.0388 12.9637 15.8138 13.1613L16.6988 14.0475Z" fill="#8D4337"/>
<path d="M14.1212 11.47C14.4002 10.6898 14.4518 9.84639 14.2702 9.03798C14.0886 8.22957 13.6811 7.48936 13.0952 6.90348C12.5093 6.3176 11.7691 5.91013 10.9607 5.72849C10.1523 5.54685 9.30893 5.59851 8.52874 5.87745L9.55749 6.9062C10.0379 6.83745 10.5277 6.88151 10.9881 7.03491C11.4485 7.18831 11.8668 7.44682 12.21 7.78997C12.5531 8.13312 12.8116 8.55147 12.965 9.01187C13.1184 9.47227 13.1625 9.96207 13.0937 10.4425L14.1212 11.47ZM10.4425 13.0937L11.47 14.1212C10.6898 14.4001 9.84642 14.4518 9.03801 14.2702C8.2296 14.0885 7.48939 13.6811 6.90351 13.0952C6.31763 12.5093 5.91016 11.7691 5.72852 10.9607C5.54688 10.1523 5.59854 9.3089 5.87749 8.5287L6.90624 9.55745C6.83748 10.0378 6.88154 10.5276 7.03494 10.988C7.18834 11.4484 7.44685 11.8668 7.79 12.2099C8.13315 12.5531 8.5515 12.8116 9.0119 12.965C9.4723 13.1184 9.9621 13.1625 10.4425 13.0937Z" fill="#8D4337"/>
<path d="M4.1875 6.83762C3.9625 7.03762 3.74625 7.24012 3.54 7.44637C2.76456 8.22598 2.0694 9.08153 1.465 10.0001L1.70875 10.3601C2.1275 10.9601 2.74625 11.7601 3.54 12.5539C5.15125 14.1651 7.35125 15.6251 10 15.6251C10.895 15.6251 11.7375 15.4589 12.525 15.1751L13.4875 16.1401C12.3874 16.6208 11.2005 16.8709 10 16.8751C3.75 16.8751 0 10.0001 0 10.0001C0 10.0001 1.17375 7.84887 3.30125 5.95262L4.18625 6.83887L4.1875 6.83762ZM17.0575 17.9426L2.0575 2.94262L2.9425 2.05762L17.9425 17.0576L17.0575 17.9426Z" fill="#8D4337"/>
</g>
<defs>
<clipPath id="clip0_12_497">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>


    <p className=" md:text-sm text-[10px] text-center ">Hide</p>
</div>

<div className="flex flex-col items-center  space-y-2">
<svg width="18" height="21" 
className="active:scale-105"
onClick={handleshortlist }
viewBox="0 0 18 21"  xmlns="http://www.w3.org/2000/svg">
<path d="M1.92436e-07 20.3438C-9.11286e-05 20.4577 0.0323215 20.5697 0.0940478 20.6688C0.155774 20.7678 0.244686 20.8505 0.352032 20.9086C0.459377 20.9668 0.581456 20.9984 0.706251 21.0004C0.831046 21.0024 0.954255 20.9746 1.06375 20.9199L8.625 17.1531L16.1863 20.9199C16.2957 20.9746 16.419 21.0024 16.5437 21.0004C16.6685 20.9984 16.7906 20.9668 16.898 20.9086C17.0053 20.8505 17.0942 20.7678 17.156 20.6688C17.2177 20.5697 17.2501 20.4577 17.25 20.3438V2.625C17.25 1.92881 16.9471 1.26113 16.4079 0.768845C15.8688 0.276562 15.1375 0 14.375 0L2.875 0C2.1125 0 1.38124 0.276562 0.842068 0.768845C0.302901 1.26113 1.92436e-07 1.92881 1.92436e-07 2.625V20.3438ZM8.625 5.78813C10.6188 3.91781 15.6026 7.1925 8.625 11.4017C1.64738 7.1925 6.63119 3.91913 8.625 5.79075V5.78813Z"

stroke="#8D4337"
strokeWidth="1"
 fill= { found?"#8D4337":"none"}/>
</svg>

    <p className=" md:text-sm text-[10px] text-center ">Shortlist</p>
</div>



<div className="flex flex-col items-center justify-center space-y-2">
    <img src="/images/report.png" 
    className="lg:h-[20px]
    h-[20px]
    active:scale-105

    "
    alt="" />

    <p className=" md:text-sm text-[10px] text-center ">Report</p>
</div>




</div>





</div>










    )




}
