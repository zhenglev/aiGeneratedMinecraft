import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/blog' },
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
                      <li className="menu-item m-1"><a className="w-full h-full block p-2" key={item.name} href={item.href} >{item.name}</a></li>
                  ))}
                </ul>
                <div className="p-4">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-lime-200 hover:bg-lime-100 neobrutal-hover-raised text-center">
                      Log in
                  </a>
              </div>
                </div>
                
              </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ul class="lg:menu-horizontal">
          {navigation.map((item) => (
            <li className="menu-item mx-1"><a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 w-full h-full block p-2">
              {item.name}
            </a></li>
          ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 bg-lime-200 hover:bg-lime-100 neobrutal-raised py-2 px-3 rounded-md">
              Log in
            </a>
          </div>
    </>
    )
}