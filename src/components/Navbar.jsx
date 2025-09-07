import { Link } from "react-router-dom"     // Use Link Instead of a tag
import logoWhite from '/logo-w.png'
import logoBlack from '/logo-b.png'

function Nav(){
   return(
      <>
         <header className="bg-gradient-to-r from-black via-red-900 to-black ...">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-5  lg:px-8">
               <div className=" flex lg:flex-1">
                  <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Moto Brands</span>
                  <img src={logoWhite} alt="" className="h-15 w-auto" />
                  </Link>
               </div>
               <div className="flex lg:hidden">
                  <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                     <span className="sr-only">Open main menu</span>
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-8">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
               </div>
               <el-popover-group className="hidden lg:flex lg:gap-x-12">
                  <div className="relative">
                     <button popoverTarget="desktop-menu-product" className="flex items-center gap-x-1 text-sm/6 font-bold text-white">
                        Motorcycle Brands
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 flex-none text-gray-500">
                           <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                     </button>

                     <el-popover id="desktop-menu-product" anchor="bottom" popover className="w-screen max-w-md overflow-hidden rounded-3xl bg-gray-950 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(3)] backdrop:bg-transparent open:block data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                        <div className="p-4">
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://mc.suzuki.com.ph/motorcycles/" target="_blank" className="block font-bold text-white">
                                    Suzuki
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">“This is How We Ride” (Suzuki Philippines)</p>
                              </div>
                           </div>
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://www.yamaha-motor.com.ph/" target="_blank" className="block font-bold text-white">
                                    Yamaha
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">"The Choice of Champions" (Yamaha Philippines)</p>
                              </div>
                           </div>
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://www.kawasaki-lifestyle.com/" target="_blank" className="block font-bold text-white">
                                    Kawasaki
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">“We Know Why You Ride” (Kawasaki Philippines)</p>
                              </div>
                           </div>
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://www.hondaph.com/motors?category=scooters" target="_blank" className="block font-bold text-white">
                                    Honda
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">“The Power of Dreams” (HONDA Philippines)</p>
                              </div>
                           </div>
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://www.vespa.com/ph_EN/models/" target="_blank" className="block font-bold text-white">
                                    Vespa
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">“Vespa in Every Sense” (Vespa Philippines)</p>
                              </div>
                           </div>
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://www.bmwmotorrad.com.ph/en/home.html#/filter-all" target="_blank" className="block font-bold text-white">
                                    BMW
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">“Make Life a Ride” (BMW Philippines)</p>
                              </div>
                           </div>
                           <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                              <div className="flex-auto">
                                 <a href="https://ducati.com.ph/" target="_blank" className="block font-bold text-white">
                                    Ducati
                                    <span className="absolute inset-0"></span>
                                 </a>
                                 <p className="italic mt-1 text-gray-400">“Unleash the Beast” (Ducati Philippines)</p>
                              </div>
                           </div>
                        </div>

                     </el-popover>
                  </div>

                  <Link to="/" className="text-sm/6 font-bold text-white">Home</Link>
                  <Link to="/about" className="text-sm/6 font-bold text-white">About</Link>
                  <Link to="/contact" className="text-sm/6 font-bold text-white">Contact</Link>
               </el-popover-group>
            </nav>
            <el-dialog>
               <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
                  <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                     <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                           <a href="#" className="-m-1.5 p-1.5">
                           <span className="sr-only">Your Company</span>
                           <img src={logoWhite} alt="" className="h-15 w-auto" />
                           </a>
                           <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-400">
                           <span className="sr-only">Close menu</span>
                           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                              <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                           </button>
                        </div>
                        <div className="mt-6 flow-root">
                           <div className="-my-6 divide-y divide-white/10">
                              <div className="space-y-2 py-6">
                                 <div className="-mx-3">
                                    <button type="button" command="--toggle" commandfor="products" className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-gray-700">
                                       Motorcycle Brands
                                       <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 flex-none in-aria-expanded:rotate-180">
                                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                       </svg>
                                    </button>
                                    <div id="products" hidden className="mt-2 block space-y-2">
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">Suzuki</Link>
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">Yamaha</Link>
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">Kawasaki</Link>
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">Honda</Link>
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">Vespa</Link>
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">BMW</Link>
                                       <Link to="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-bold italic text-white hover:bg-white/5">Ducati</Link>
                                    </div>
                                 </div>
                                 <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-700">Home</Link>
                                 <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-700">About</Link>
                                 <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-700">Contact</Link>
                              </div>
                           </div>
                        </div>
                     </el-dialog-panel>
                  </div>
               </dialog>
            </el-dialog>
         </header>
      </>
   )
}

export default Nav