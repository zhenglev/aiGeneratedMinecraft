

import { Bars3Icon ,HomeIcon, WalletIcon, BellIcon, MagnifyingGlassIcon, InboxIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
  return (
    <div className="bg-white h-screen flex flex-col">
        <div class="drawer lg:drawer-open h-full">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class="navbar w-full border-b-2 border-black">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" aria-label="open sidebar" >
                                <Bars3Icon className="ml-2 h-6 w-6" />
                            </label>
                        </div>

                        <div class="flex-1  gap-2">
                            <h1 class="px-3 py-4 font-bold text-xl lg:hidden">daisyUI</h1>
                                  
                            <label class="lg:ml-2 flex input input-bordered focus-visible:ring-black items-center gap-2">
                                <MagnifyingGlassIcon className="h-5 w-5" />
                                <input type="text" class="grow" placeholder="Search" />
                            </label>
                        </div>
 
                        <div class="flex-none gap-2">
                                <div class="dropdown dropdown-end mr-4">
                                    <div tabindex="0" role="button" >
                                        <div class="rounded-full indicator flex justify-center items-center">
                                            <BellIcon className="h-6 w-6" />
                                            <span class="badge badge-xs bg-lime-500 border-transparent indicator-item"></span>
                                        </div>
                                    </div>
                                    <div tabindex="0" className="dropdown-content bg-base-100 rounded-md z-[1] w-60 mt-1 border-neobrutal">
                                        <div className="mx-4 mt-4 mb-2 font-bold">Notifications</div>
                                        <div role="tablist" className="tabs tabs-bordered grid-cols-2 tabs-md">

                                            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Inbox" defaultChecked />
                                            <div role="tabpanel" className="tab-content bg-gray-100 h-48 overflow-auto">
                                               <div className="flex items-center justify-center w-full h-full">
                                                    <InboxIcon className="w-8 h-8"/>
                                               </div>
                                            </div>

                                            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Archived"   />
                                            <div role="tabpanel" className="tab-content bg-gray-100 h-48 overflow-auto">
                                                <ul>
                                                    <li  className="py-4 px-4 flex items-center border-b cursor-pointer" ><a> msg 1</a></li>
                                                    <li  className="py-4 px-4 flex items-center border-b cursor-pointer"><a>msg 2</a></li>
                                                    <li  className="py-4 px-4 flex items-center border-b cursor-pointer"><a>msg 3</a></li>
                                                    <li  className="py-4 px-4 flex items-center border-b cursor-pointer"><a>msg 4</a></li>
                                                </ul>
                                            </div>
                                        </div>  

                                    </div>
                                </div>
                                <div class="dropdown dropdown-end mr-2">
                                    <div tabindex="0" role="button" class="avatar rounded-full flex ring-2 ring-offset-2 ring-black">
                                        <div class="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <ul
                                        tabindex="0"
                                        class="dropdown-content bg-base-100 rounded-md z-[1] w-32 p-2 mt-2 border-neobrutal">
                                        <li  className="menu-item m-1 py-1" ><a>Profile</a></li>
                                        <li  className="menu-item m-1 py-1"><a>Settings</a></li>
                                        <li  className="menu-item m-1 py-1"><a>Logout</a></li>
                                    </ul>
                                </div>
                        </div>

                    </div>
                    <div className="w-full h-full bg-gray-200">
                        <div className="px-10 py-4 max-md:px-4.5 md:pt-10">
                          <div className="bg-white p-4 border-2 border-black">Content</div>
                        </div>
                    </div>
                    
                </div>
                <div class="drawer-side z-10">
                    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="min-h-full w-80 p-4 bg-lime-200 border-r-2 border-black ">
                        <h1 class="px-3 pb-4 font-bold text-xl">daisyUI</h1>
                        <li className="menu-item m-1 text-left"><a className="w-full h-full p-2 flex"><HomeIcon className='h-6 w-6 mr-2' />Sidebar Item 1</a></li>
                        <li className="menu-item m-1 text-left"><a className="w-full h-full p-2 flex"><WalletIcon className='h-6 w-6 mr-2' />Sidebar Item 2</a></li>
                    </ul>
                </div>
        </div>
    </div>
  )
}