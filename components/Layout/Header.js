

import Logo from '@/components/Logo'
import Menu from '@/components/menu'



export default function Header() {

  return (
   <>
    <header>
        <nav  class="navbar bg-base-100 border-b-2 border-black flex items-center justify-between px-6 py-3 lg:px-8">
          <Logo></Logo>
          <Menu></Menu>
        </nav>
    </header>
   </>
  )
}





































