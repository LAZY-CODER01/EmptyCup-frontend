// eslint-disable-next-line react/prop-types
export default function Stars({stars}){

    const fullstars= parseInt(stars);
  const halfstar = stars% 1 >= 0.5;
    const emptystars=5-fullstars-halfstar;


    return (
        <div className="flex space-x-1 ">

   

 { Array(fullstars).fill(0).map(

        
(e,indx)=>(
    <div key={indx}>
<img src="//images/fullstar.png" className="w-4" alt="" />
    </div>
)
         )}


          { Array(halfstar).fill(0).map(

        
(e,indx)=>(
    <div key={indx}>
<img src="//images/halfstar.png" className="w-4"  alt="" />
    </div>
)
         )}

 { Array(emptystars).fill(0).map(

        
(e,indx)=>(
    <div key={indx}>
<img src="//images/emptystar.png" className="w-4"  alt="" />
    </div>
)
         )}

        </div>
    )


}