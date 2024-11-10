import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Instruction', href: '#instruction' },
    { name: 'FAQs', href: '#faq' },
  ]

export default function Menu() {
    return (
    <>
        <div className="flex lg:hidden">
          <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                <Bars3BottomRightIcon aria-hidden="true" className="h-8 w-8" />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="bg-white text-base-content min-h-full w-80 p-4">
                <ul >
                  {/* Sidebar content here */}
                  {navigation.map((item) => (
                      <li className="menu-item m-1" key={item.name}><a className="w-full h-full block p-2" href={item.href} >{item.name}</a></li>
                  ))}
                </ul>
                <div className="p-4">
                  <a href="https://oasis.decart.ai/starting-point" className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-200 hover:bg-violet-100 neobrutal-hover-raised text-center">
                    Play Game
                  </a>
              </div>
                </div>
                
              </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ul class="lg:menu-horizontal">
          {navigation.map((item) => (
            <li className="menu-item mx-1" key={item.name}><a  href={item.href} className="text-sm font-semibold leading-6 text-gray-900 w-full h-full block p-2">
              {item.name}
            </a></li>
          ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://oasis.decart.ai/starting-point" className="text-sm font-semibold leading-6 text-gray-900 bg-violet-200 hover:bg-violet-100 neobrutal-raised py-2 px-3 rounded-md">
              Play Game
            </a>
          </div>
    </>
    )
}