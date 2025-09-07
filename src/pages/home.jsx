import suzuki from '/Suzuki.jpg'
import yamaha from '/yamaha.jpg'
import kawasaki from '/kawasaki.jpg'
import honda from '/Honda.jpg'
import vespa from '/Vespa.jpg'
import BMW from '/BMW.jpg'
import ducati from '/ducati.jpg'

function Home(){
   return(
      <>
         <section className="bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center flex flex-col items-center">

               <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4">"Welcome to 
                  <span className="text-red-900 bg-clip-text font-extrabold"> MOTOBRANDS"</span>
               </h1>
               <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl italic">More than just machines, these rides embody strength, passion, and adventure. Bold in design, legendary in performance crafted to ignite your spirit and fuel your every journey.</p>
               <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 w-full">
                  <img src={suzuki} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                  <img src={yamaha} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                  <img src={kawasaki} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                  <img src={honda} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                  <img src={vespa} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                  <img src={BMW} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                  <img src={ducati} alt="" className="h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 object-cover rounded-lg shadow-md hover:scale-105 transition" />
               </div>

            </div>
         </section>
      </>
   )
}

export default Home