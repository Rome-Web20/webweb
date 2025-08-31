import Pussyrider from '/PussyRider.jpg'
import Moto1 from '/moto1.jpg'
import Moto2 from '/moto2.jpg'
import Moto4 from '/moto4.jpg'

function Home(){
   return(
      <>
         <div className=" bg-gray-950">
            <div className=" min-h-[650px] max-w-7xl mx-auto px-50 py-50 ">
               
               <div className="flex flex-col items-center justify-center lg:flex-1">
                  <h1 className="font-bold text-white">TRY HOME PAGE!</h1>
                  <img src={Pussyrider} alt="" className="h-60 w-60 mx-auto" />  
                  {/* <img src={Moto1} alt="" className="h-60 w-[17%]" /> 
                  <img src={Moto2} alt="" className="h-60 w-[17%]" />  
                  <img src={Moto4} alt="" className="h-60 w-[17%]" />        */}
               </div>
               
            </div>
         </div>
      </>
   )
}

export default Home