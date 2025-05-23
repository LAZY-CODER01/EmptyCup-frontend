 

import { useSelector } from "react-redux";
import { DesignerCard } from "./designcard";

export default function DesignList (){


const designers = [
  {
    id:1,
    name: "Epic Designs",
    rating: 3.5,
    description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
    stats: {
      projects: 57,
      years: 8,
      priceTier: "$$"
    },
    contacts: ["+91 - 984532853", "+91 - 984532854"],
    actions: {
      details: true,
      hide: true,
      shortlist: false,
      report: true
    }
  },
  {
    id:2,
    name: "Pixel Studio",
    rating: 4.0,
    description: "Creative studio with 5 innovative minds from Mumbai, delivering modern designs for 5 years.",
    stats: {
      projects: 64,
      years: 5,
      priceTier: "$$$"
    },
    contacts: ["+91 - 9123456789", "+91 - 9876543210"],
    actions: {
      details: true,
      hide: true,
      shortlist: false,
      report: true
    }
  },
  { id:3,
    name: "Design Lab",
    rating: 4.2,
    description: "A lab of 6 artistic designers from Delhi with 6 years of experience in UI/UX.",
    stats: {
      projects: 70,
      years: 6,
      priceTier: "$$"
    },
    contacts: ["+91 - 9345678912", "+91 - 9988776655"],
    actions: {
      details: true,
      hide: true,
      shortlist: false,
      report: true
    }
  },
  {
    id:4,
    name: "Crafted Creatives",
    rating: 3.8,
    description: "Boutique agency with a flair for storytelling, based in Pune with 7 years of service.",
    stats: {
      projects: 48,
      years: 7,
      priceTier: "$"
    },
    contacts: ["+91 - 8765432109", "+91 - 9654321987"],
    actions: {
      details: true,
      hide: true,
      shortlist: false,
      report: true
    }
  },
  {  id:5,
    name: "Visionary Designers",
    rating: 4.5,
    description: "Team of 8 trendsetters from Hyderabad, redefining aesthetics for the past 9 years.",
    stats: {
      projects: 90,
      years: 9,
      priceTier: "$$$"
    },
    contacts: ["+91 - 9988123456", "+91 - 9112233445"],
    actions: {
      details: true,
      hide: true,
      shortlist: false,
      report: true
    }
  }
];




 const shortlistedItems = useSelector((state) => state.shortlistitem.items);
  const isShortlistActive = useSelector((state) => state.shortlist); 

  let designersToRender = isShortlistActive ? shortlistedItems : designers;

  const issorted=useSelector((state)=> state.sortorder);

 
  designersToRender= issorted?[... designersToRender].sort( (a,b)=> a.name.localeCompare(b.name)):designersToRender;





return( 

     ( <div className="flex flex-col flex-wrap justify-center space-y-6 py-6 ">
      {designersToRender.map((designer, idx) => (
        <DesignerCard key={designer.id} designer={designer} index={idx} />
      ))}
    </div>)
  
)

}




